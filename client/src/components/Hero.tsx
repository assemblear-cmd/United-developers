import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Award } from "lucide-react";
import heroImage from "@assets/generated_images/Luxury_Chilean_villa_hero_c78fe707.png";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <MapPin className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/90">
            Chile Premium Real Estate
          </span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Villas de Lujo
          <span className="block text-primary">Excepcionales</span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Desarrollamos propiedades de lujo y proyectos industriales únicos en Chile, 
          combinando diseño excepcional con la belleza natural del país.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
            data-testid="button-explore-villas"
          >
            Explorar Villas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-3"
            data-testid="button-industrial-projects"
          >
            Proyectos Industriales
          </Button>
        </div>
        
        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">25+</div>
            <div className="text-sm text-primary-foreground/80">Villas de Lujo</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-primary-foreground/80">Proyectos Industriales</div>
          </div>
          <div className="text-center flex items-center space-x-2">
            <Award className="h-6 w-6 text-primary" />
            <div>
              <div className="text-sm font-semibold text-primary-foreground">Premio Excelencia</div>
              <div className="text-xs text-primary-foreground/80">Arquitectura 2024</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}