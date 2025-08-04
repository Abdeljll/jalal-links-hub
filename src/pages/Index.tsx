import { PortfolioCard } from "@/components/PortfolioCard";
import { MouseGlow } from "@/components/MouseGlow";
import { ScrollingText } from "@/components/ScrollingText";
import { Github, Linkedin, Mail, MapPin, Sparkles, Rocket } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-background relative overflow-hidden">
      <MouseGlow />
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyber-green/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-electric-blue/10 rounded-full blur-3xl animate-pulse-glow delay-500" />
      </div>

      {/* Header Section */}
      <header className="relative">
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-accent rounded-full mb-8 shadow-green animate-fade-in">
              <Rocket className="w-5 h-5 text-accent-foreground animate-pulse-glow" />
              <span className="text-lg font-bold text-accent-foreground">Disponible pour de nouvelles opportunités</span>
              <Sparkles className="w-5 h-5 text-accent-foreground animate-pulse-glow" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-foreground mb-6 neon-text animate-scale-in">
              ABDELAZIZ
              <span className="text-transparent bg-gradient-primary bg-clip-text"> JALAL</span>
            </h1>
            
            <p className="text-2xl md:text-4xl text-transparent bg-gradient-secondary bg-clip-text font-bold mb-4 animate-fade-in">
              Développeur Full Stack
            </p>
            
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
              🎓 Diplômé en Informatique et Génie Logiciel
            </p>

            <div className="flex items-center justify-center gap-8 text-muted-foreground mb-12">
              <div className="flex items-center gap-3 px-4 py-2 bg-card/50 rounded-full border border-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Montréal, QC</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://github.com/Abdeljll" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-gradient-card border border-primary/20 rounded-xl hover:bg-gradient-primary hover:shadow-neon transition-all duration-500 hover:scale-110 group"
              >
                <Github className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jalal-abdelaziz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-gradient-card border border-primary/20 rounded-xl hover:bg-gradient-secondary hover:shadow-pink transition-all duration-500 hover:scale-110 group"
              >
                <Linkedin className="h-6 w-6 text-foreground group-hover:text-secondary-foreground transition-colors" />
              </a>
              <a 
                href="mailto:abdelazizjalal7@icloud.com"
                className="p-4 bg-gradient-card border border-primary/20 rounded-xl hover:bg-gradient-accent hover:shadow-green transition-all duration-500 hover:scale-110 group"
              >
                <Mail className="h-6 w-6 text-foreground group-hover:text-accent-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Scrolling Text */}
      <ScrollingText />

      {/* Portfolios Section */}
      <section className="relative container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 neon-text">
              Mes <span className="text-transparent bg-gradient-rainbow bg-clip-text">Portfolios</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez mes différentes versions de portfolio, chacune reflétant mon évolution en tant que 
              <span className="text-transparent bg-gradient-primary bg-clip-text font-bold"> développeur créatif</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            {portfolios.map((portfolio, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <PortfolioCard {...portfolio} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative container mx-auto px-6 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg">
            © 2025 <span className="text-transparent bg-gradient-primary bg-clip-text font-bold">Abdelaziz Jalal</span>. 
            Tous droits réservés.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-rainbow rounded-full mx-auto" />
        </div>
      </footer>
    </div>
  );
};

export default Index;