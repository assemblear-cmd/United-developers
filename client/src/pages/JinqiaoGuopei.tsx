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
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F2a1afede1cc94e8798f4e4909b34323c?format=webp&width=1200",
      alt: "Aerial view of mixed-use development with modern architecture and infrastructure",
      title: "Aerial Complex"
    },
    {
      src: jinqiaoImage,
      alt: "Jinqiao Guopei 1851 mixed-use commercial complex in Shanghai",
      title: "Commercial Complex"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F3f2e73ae29af49bfbfdd08f2b2dbca3c?format=webp&width=1200",
      alt: "Urban skyline with modern commercial towers and infrastructure",
      title: "Skyline View"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F21d5784aa5bc4584a34f87bb95abf197?format=webp&width=1200",
      alt: "Waterfront development with modern architecture and public spaces",
      title: "Waterfront Complex"
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

        {/* Image Gallery */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Gallery
              </h2>
              <div className="w-16 h-0.5 bg-primary/60 mx-auto mb-8"></div>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-8 w-full max-w-5xl mx-auto">
              {/* Left Navigation Button */}
              <Button
                onClick={() => setCarouselIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)}
                variant="ghost"
                size="icon"
                className="flex-shrink-0 text-foreground hover:bg-muted h-10 w-10 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </Button>

              {/* Main Image */}
              <div className="flex-1 min-w-0">
                <Card className="overflow-hidden bg-card/70 backdrop-blur-sm cursor-pointer hover:opacity-90 transition-opacity w-full" onClick={() => setIsLightboxOpen(true)}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={projectImages[carouselIndex].src}
                      alt={projectImages[carouselIndex].alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      data-testid={`carousel-main-${carouselIndex}`}
                    />
                  </div>
                </Card>
                {/* Image Counter */}
                <div className="text-center mt-4 text-sm text-muted-foreground">
                  {carouselIndex + 1} / {projectImages.length}
                </div>
              </div>

              {/* Right Navigation Button */}
              <Button
                onClick={() => setCarouselIndex((prev) => (prev + 1) % projectImages.length)}
                variant="ghost"
                size="icon"
                className="flex-shrink-0 text-foreground hover:bg-muted h-10 w-10 sm:h-12 sm:w-12"
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </Button>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] md:max-h-[85vh] landscape:max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projectImages[carouselIndex].src}
                alt={projectImages[carouselIndex].alt}
                className="w-full h-full object-contain"
              />

              {/* Navigation Buttons - Mobile */}
              <button
                onClick={() => setCarouselIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)}
                className="md:hidden absolute left-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 transition-colors z-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={() => setCarouselIndex((prev) => (prev + 1) % projectImages.length)}
                className="md:hidden absolute right-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 transition-colors z-10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Navigation Buttons - Desktop */}
              <button
                onClick={() => setCarouselIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)}
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={() => setCarouselIndex((prev) => (prev + 1) % projectImages.length)}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

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
