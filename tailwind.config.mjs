/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF9',
        foreground: '#1C1917',
        card: '#FFFFFF',
        'card-foreground': '#1C1917',
        primary: '#78716C',
        'primary-foreground': '#FFFFFF',
        secondary: '#F5F5F4',
        'secondary-foreground': '#1C1917',
        muted: '#E7E5E4',
        'muted-foreground': '#57534E',
        accent: '#B45309',
        'accent-foreground': '#FFFBEB',
        destructive: '#DC2626',
        'destructive-foreground': '#FFFFFF',
        border: '#D6D3D1',
        input: '#D6D3D1',
        ring: '#78716C',
        cta: '#B45309',
        'cta-hover': '#92400E',
        success: '#059669',
        surface: '#F5F5F4',
        'primary-900': '#44403C',
        'primary-950': '#292524',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.08)',
        medium: '0 24px 80px rgba(0, 0, 0, 0.10)',
        sm: '0 4px 12px rgba(0, 0, 0, 0.05)',
        lg: '0 30px 80px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
