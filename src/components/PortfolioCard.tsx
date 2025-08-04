import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code2, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PortfolioCardProps {
  title: string;
  description: string;
  url: string;
  version: string;
  status: string;
  technologies: string[];
}

export const PortfolioCard = ({ title, description, url, version, status, technologies }: PortfolioCardProps) => {
  const { t } = useLanguage();
  
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-card border border-primary/20 shadow-neon hover:shadow-pink transition-all duration-500 hover:scale-105 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-rainbow rainbow-border" />
      
      <CardContent className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-primary shadow-neon group-hover:shadow-green transition-all duration-500">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:neon-text group-hover:text-primary transition-all duration-500">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">{version}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-accent">
            <Sparkles className="h-4 w-4 text-accent-foreground animate-pulse-glow" />
            <span className="text-sm font-bold text-accent-foreground">{status}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 text-xs font-bold bg-gradient-secondary rounded-full text-secondary-foreground shadow-pink hover:scale-110 transition-transform duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={handleClick}
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-bold text-lg shadow-neon hover:shadow-green hover:scale-105 transition-all duration-500 relative overflow-hidden group"
        >
          <span className="relative z-10">{t('portfolio.visit')}</span>
          <ExternalLink className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>
      </CardContent>
    </Card>
  );
};