import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-6 right-6 z-50 bg-gradient-card border border-primary/20 hover:bg-gradient-primary hover:shadow-neon transition-all duration-500 hover:scale-110 group"
    >
      <Languages className="h-4 w-4 mr-2 text-foreground group-hover:text-primary-foreground transition-colors" />
      <span className="text-foreground group-hover:text-primary-foreground transition-colors">
        {language === 'fr' ? t('language.english') : t('language.french')}
      </span>
    </Button>
  );
};