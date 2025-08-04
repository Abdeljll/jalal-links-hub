import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Header
    'header.available': 'Disponible pour de nouvelles opportunités',
    'header.name': 'ABDELAZIZ JALAL',
    'header.title': 'Développeur Full Stack',
    'header.education': '🎓 Diplômé en Informatique et Génie Logiciel',
    'header.location': 'Montréal, QC',
    
    // Scrolling text
    'skills.fullstack': '🚀 Full Stack Developer',
    'skills.react': '💻 React Expert',
    'skills.typescript': '🎯 TypeScript Ninja',
    'skills.nodejs': '🔥 Node.js Master',
    'skills.uiux': '✨ UI/UX Designer',
    'skills.performance': '⚡ Performance Optimizer',
    'skills.creative': '🎨 Creative Coder',
    'skills.solver': '🌟 Problem Solver',
    
    // Portfolio section
    'portfolio.title': 'Mes Portfolios',
    'portfolio.description': 'Découvrez mes différentes versions de portfolio, chacune reflétant mon évolution en tant que développeur créatif.',
    'portfolio.v2.title': 'Portfolio V2',
    'portfolio.v2.description': 'Site portfolio moderne avec design épuré, présentant mes projets, compétences et expériences en développement logiciel. Interface responsive avec navigation intuitive. (Entièrement en anglais)',
    'portfolio.v1.title': 'Portfolio V1',
    'portfolio.v1.description': 'Première version de mon portfolio personnel créée avec Gatsby. Design hexagonal distinctif avec animations élégantes pour présenter mon parcours professionnel. (Entièrement en français)',
    'portfolio.visit': 'Visiter le site',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    
    // Language
    'language.french': 'Français',
    'language.english': 'English'
  },
  en: {
    // Header
    'header.available': 'Available for new opportunities',
    'header.name': 'ABDELAZIZ JALAL',
    'header.title': 'Full Stack Developer',
    'header.education': '🎓 Computer Science & Software Engineering Graduate',
    'header.location': 'Montreal, QC',
    
    // Scrolling text
    'skills.fullstack': '🚀 Full Stack Developer',
    'skills.react': '💻 React Expert',
    'skills.typescript': '🎯 TypeScript Ninja',
    'skills.nodejs': '🔥 Node.js Master',
    'skills.uiux': '✨ UI/UX Designer',
    'skills.performance': '⚡ Performance Optimizer',
    'skills.creative': '🎨 Creative Coder',
    'skills.solver': '🌟 Problem Solver',
    
    // Portfolio section
    'portfolio.title': 'My Portfolios',
    'portfolio.description': 'Discover my different portfolio versions, each reflecting my evolution as a creative developer.',
    'portfolio.v2.title': 'Portfolio V2',
    'portfolio.v2.description': 'Modern portfolio website with clean design, showcasing my projects, skills and software development experience. Responsive interface with intuitive navigation. (Entirely in English)',
    'portfolio.v1.title': 'Portfolio V1',
    'portfolio.v1.description': 'First version of my personal portfolio created with Gatsby. Distinctive hexagonal design with elegant animations to present my professional journey. (Entirely in French)',
    'portfolio.visit': 'Visit website',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    
    // Language
    'language.french': 'Français',
    'language.english': 'English'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};