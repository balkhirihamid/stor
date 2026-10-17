export const languages = {
  ar: { name: 'العربية', dir: 'rtl' },
  en: { name: 'English', dir: 'ltr' },
  fr: { name: 'Français', dir: 'ltr' },
};

export const defaultLang = 'ar';

export const ui = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'welcome.title': 'مرحباً بك في موقعنا!',
    'welcome.desc': 'هذا موقع Astro مبني كـ SSG يدعم عدة لغات.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'welcome.title': 'Welcome to our website!',
    'welcome.desc': 'This is a static Astro website supporting multiple languages.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'welcome.title': 'Bienvenue sur notre site!',
    'welcome.desc': 'Ceci est un site Astro statique prenant en charge plusieurs langues.',
  },
} as const;