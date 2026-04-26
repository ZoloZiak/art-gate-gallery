export type Language = 'sk' | 'en';

export const getTranslations = (language: Language) => {
  const t = {
    sk: {
      // Navigation
      nav: {
        home: 'Domov',
        exhibitions: 'Výstavy',
        artists: 'Umelci',
        visit: 'Navštívte nás',
        contact: 'Kontakt',
        language: 'EN',
      },
      // Hero
      hero: {
        tagline: 'Kde umenie otvára dvere',
        subtitle: 'Súčasné umenie z lokálnych aj medzinárodných umelcov',
        cta: 'Objavte výstavy',
        ctaSecondary: 'Navštívte nás',
      },
      // About
      about: {
        title: 'O galérii',
        intro: 'Art Gate Gallery je miesto stretu medzi umením a publikom. V srdci Martina vytvárame priestor pre dialóg, inšpiráciu a odbornú diskusiu.',
        mission: 'Našou misiou je podporovať slovenských aj medzinárodných umelcov, organizovať výstavy, workshopy a spoločenské akcie, ktoré obohacujú kultúrne prostredie regiónu.',
      },
      // Common
      common: {
        learnMore: 'Ďalej',
        viewAll: 'Zobraziť všetky',
        readMore: 'Čítať viac',
      },
      // Footer
      footer: {
        contact: 'Kontakt',
        visitUs: 'Navštívte nás',
        hours: 'Otváracie hodiny',
        callUs: 'Zavolajte nám',
        emailUs: 'Email',
        rights: 'Všetky práva vyhradené.',
      },
      // Contact Form
      contact: {
        title: 'Kontaktujte nás',
        name: 'Meno',
        email: 'Email',
        subject: 'Predmet',
        message: 'Správa',
        send: 'Odoslať správu',
        sending: 'Odosielam...',
        success: 'Vaša správa bola odoslaná. Ozveme sa vám čoskoro.',
        error: 'Nastala chyba. Skúste to prosím neskôr.',
      },
      // Exhibitions
      exhibitions: {
        current: 'Aktuálne výstavy',
        upcoming: 'Nasledujúce výstavy',
        past: 'Minulé výstavy',
        openUntil: 'Otváracie do',
        artist: 'Umelec',
      },
      // Artists
      artists: {
        title: 'Vystavení umelci',
        biography: 'Biografia',
        statement: 'Umelecké vyhlásenie',
        works: 'Práce',
      },
      // Visit
      visit: {
        title: 'Navštívte nás',
        address: 'Adresa',
        map: 'Zobraziť na mape',
        getDirections: 'Získajte navigáciu',
      },
    },
    en: {
      nav: {
        home: 'Home',
        exhibitions: 'Exhibitions',
        artists: 'Artists',
        visit: 'Visit',
        contact: 'Contact',
        language: 'SK',
      },
      hero: {
        tagline: 'Where Art Opens Doors',
        subtitle: 'Contemporary art from local and international artists',
        cta: 'Discover Exhibitions',
        ctaSecondary: 'Visit Us',
      },
      about: {
        title: 'About the Gallery',
        intro: 'Art Gate Gallery is a meeting point between art and audience. In the heart of Martin, we create space for dialogue, inspiration, and professional discussion.',
        mission: 'Our mission is to support Slovak and international artists, organize exhibitions, workshops, and social events that enrich the region\'s cultural landscape.',
      },
      common: {
        learnMore: 'Learn More',
        viewAll: 'View All',
        readMore: 'Read More',
      },
      footer: {
        contact: 'Contact',
        visitUs: 'Visit Us',
        hours: 'Opening Hours',
        callUs: 'Call Us',
        emailUs: 'Email',
        rights: 'All rights reserved.',
      },
      contact: {
        title: 'Contact Us',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Your message has been sent. We will get back to you soon.',
        error: 'An error occurred. Please try again later.',
      },
      exhibitions: {
        current: 'Current Exhibitions',
        upcoming: 'Upcoming Exhibitions',
        past: 'Past Exhibitions',
        openUntil: 'Open until',
        artist: 'Artist',
      },
      artists: {
        title: 'Featured Artists',
        biography: 'Biography',
        statement: 'Artist Statement',
        works: 'Works',
      },
      visit: {
        title: 'Visit Us',
        address: 'Address',
        map: 'View on map',
        getDirections: 'Get directions',
      },
    },
  }[language];

  return t;
};

export const getRelativeHref = (path: string, language: Language): string => {
  if (language === 'sk') {
    return path.startsWith('/en') ? `/${path.replace('/en/', '')}` : path;
  }
  if (!path.startsWith('/')) path = `/${path}`;
  return `/en${path}`;
};
