import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code2, Sparkles } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  description: string;
  url: string;
  version: string;
  status: string;
  technologies: string[];
}

export const PortfolioCard = ({ title, description, url, version, status, technologies }: PortfolioCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <CardContent className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{version}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">{status}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          Visiter le site
          <ExternalLink className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
};