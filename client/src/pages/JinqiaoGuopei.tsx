import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Ruler, CheckCircle, Building2, Leaf, Zap, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// Import project images
import jinqiaoImage from "@assets/Screenshot_2025-09-27-15-36-36-976_cn.wps.xiaomi.abroad.lite-edit_1759009184273.jpg";

export default function JinqiaoGuopei() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const projectImages = [
    {
      src: jinqiaoImage,
      alt: "Jinqiao Guopei 1851 mixed-use commercial complex in Shanghai",
      title: "Commercial Complex"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F3f2e73ae29af49bfbfdd08f2b2dbca3c?format=webp&width=1200",
      alt: "Urban skyline with modern commercial towers and infrastructure",
      title: "Skyline View"
    }
  ];

  const projectFeatures = [
    {
      icon: Building2,
      title: "Multi-functional Configuration",
      description: "Complex spatial arrangements maximizing land and commercial resources"
    },
    {
      icon: Zap,
      title: "Viaduct Integration",
      description: "Building utilizes elevated infrastructure to enhance podium interface"
    },
    {
      icon: Leaf,
      title: "Jiangnan Gardens",
      description: "Series of heritage gardens creating visual and spatial continuity"
    },
    {
      icon: Users,
      title: "Cultural Exchange Hub",
      description: "Sub-central world exchanger blending virtual and real experiences"
    }
  ];

  const projectSpecs = [
    {
      icon: Ruler,
      value: "140,000 m²",
      label: "Total Development Area"
    },
    {
      icon: Calendar,
      value: "2019",
      label: "Project Completion"
    },
    {
      icon: MapPin,
      value: "Shanghai, China",
      label: "Location"
    },
    {
      icon: CheckCircle,
      value: "Completed",
      label: "Project Status"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section
          className="py-20 bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F3f2e73ae29af49bfbfdd08f2b2dbca3c?format=webp&width=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6" data-testid="badge-project-type">
                Commercial
              </Badge>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-page-title">
                Jinqiao Guopei 1851
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                International metropolis symbol through high-complexity function configuration and multi-dimensional spatial interleaving
              </p>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-8">
                  Mixed-Use Innovation
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    The Jinqiao National Training Center represents a comprehensive approach to urban mixed-use development in Shanghai. This commercial complex maximizes the use of national land resources and empowers public resources through innovative design principles.
                  </p>
                  
                  <p>
                    The design creates a visual symbol of an international metropolis through high-complexity function configuration and multi-dimensional spatial interleaving. The building strategically takes advantage of the viaduct on the west side of the site, integrating it seamlessly with the top interface of the podium to enhance both functionality and visual impact.
                  </p>
                  
                  <p>
                    A series of carefully designed Jiangnan gardens weaves historical continuity throughout the site, establishing new visual level lines and thematic elements from the elevated viaduct. The podium beneath the viaduct blends interior and exterior spaces, alternating between virtual and real experiences, creating a sub-central world exchanger and activity filter for the entire complex.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {projectSpecs.map((spec, index) => (
                  <Card key={index} className="text-center bg-card/70 backdrop-blur-sm hover-elevate">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <spec.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-2" data-testid={`text-spec-${index}`}>
                        {spec.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {spec.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Images */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Project Visualization
              </h2>
              <div className="w-16 h-0.5 bg-primary/60 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mixed-use complex showcasing contemporary commercial architecture
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projectImages.map((image, index) => (
                <Card key={index} className="overflow-hidden bg-card/70 backdrop-blur-sm" data-testid={`card-image-${index}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      data-testid={`img-project-${index}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {image.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Design Principles
              </h2>
              <div className="w-16 h-0.5 bg-primary/60 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projectFeatures.map((feature, index) => (
                <Card key={index} className="text-center bg-card/70 backdrop-blur-sm hover-elevate">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Spatial Integration */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/70 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                      Viaduct Integration Strategy
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/60 mx-auto"></div>
                  </div>
                  
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      The project's defining characteristic is its innovative integration with the existing viaduct infrastructure on the western portion of the site. Rather than treating this constraint as a limitation, the design transforms it into an opportunity for spatial and functional enhancement.
                    </p>
                    
                    <p>
                      The building's podium carefully orchestrates its interface with the viaduct, creating a seamless transition that maximizes both programmatic efficiency and visual continuity. The series of Jiangnan gardens leverages this elevated relationship to establish a new visual language—one that reads as a continuous thread from ground level to the viaduct canopy and beyond.
                    </p>
                    
                    <p>
                      This multi-layered approach creates spaces for both commerce and contemplation, where visitors experience alternating moments of openness and enclosure, light and shadow, activity and repose. The podium functions as an urban filter, moderating the relationship between the intensive commercial development above and the public realm below.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
