import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/schemas';
import { GALLERY_INFO } from '@/data/site';
import type { APIRoute } from 'astro';

export const prerender = false;
// export const runtime = 'edge'; // Disabled: Resend SDK requires Node runtime

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const parsed = contactFormSchema.parse(data);

    await resend.emails.send({
      from: process.env.RESEND_FROM || 'Art Gate Gallery <onboarding@resend.dev>',
      to: [GALLERY_INFO.contact.email],
      subject: `[Art Gate Contact] ${parsed.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: system-ui, sans-serif; padding: 2rem; background: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <h2 style="color: #78716C; margin-bottom: 1rem;">New Contact Submission</h2>
              <p><strong>Name:</strong> ${parsed.name}</p>
              <p><strong>Email:</strong> ${parsed.email}</p>
              <p><strong>Subject:</strong> ${parsed.subject}</p>
              <p><strong>Message:</strong></p>
              <p style="background: #f5f5f5; padding: 1rem; border-radius: 8px; margin-top: 0.5rem;">${parsed.message}</p>
            </div>
          </body>
        </html>
      `,
      text: `Name: ${parsed.name}\nEmail: ${parsed.email}\nSubject: ${parsed.subject}\n\nMessage:\n${parsed.message}`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to send message' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
