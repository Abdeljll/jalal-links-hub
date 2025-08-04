import { PortfolioCard } from "@/components/PortfolioCard";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Index = () => {
  const portfolios = [
    {
      title: "Portfolio V2",
      description: "Site portfolio moderne avec design épuré, présentant mes projets, compétences et expériences en développement logiciel. Interface responsive avec navigation intuitive.",
      url: "https://abdelazizjalalv2.netlify.app",
      version: "Version 2.0",
      status: "Actuel",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Netlify"]
    },
    {
      title: "Portfolio V1", 
      description: "Première version de mon portfolio personnel créée avec Gatsby. Design hexagonal distinctif avec animations élégantes pour présenter mon parcours professionnel.",
      url: "https://abdelazizjalal.netlify.app",
      version: "Version 1.0",
      status: "Legacy",
      technologies: ["Gatsby", "JavaScript", "HTML/CSS", "Node.js", "Yarn"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="relative container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">Disponible pour de nouvelles opportunités</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              ABDELAZIZ
              <span className="text-primary">|</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Développeur Full Stack
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Diplômé en Informatique et Génie Logiciel
            </p>

            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Montréal, QC</span>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/Abdeljll" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jalal-abdelaziz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:abdelazizjalal7@icloud.com"
                  className="hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Portfolios Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mes Portfolios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez mes différentes versions de portfolio, chacune reflétant mon évolution en tant que développeur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolios.map((portfolio, index) => (
              <PortfolioCard key={index} {...portfolio} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center">
        <p className="text-muted-foreground">
          © 2025 Abdelaziz Jalal. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default Index;
