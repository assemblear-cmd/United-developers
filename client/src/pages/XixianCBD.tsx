import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Ruler, CheckCircle, Building2, Leaf, Network, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Import project images
import cbdOverview from "@assets/IMG_20250926_225621_1759024058656.jpg";
import modernComplex from "@assets/IMG_20250926_225554_1759024058744.jpg";
import waterFeature from "@assets/IMG_20250926_225530_1759024058808.jpg";

export default function XixianCBD() {
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
      src: cbdOverview, 
      alt: "Xixian CBD overview showing modern office towers and integrated green spaces",
      title: "Urban Integration"
    },
    { 
      src: modernComplex, 
      alt: "Contemporary commercial complex with landscaped courtyards and public spaces",
      title: "Commercial Hub"
    },
    { 
      src: waterFeature, 
      alt: "Central water feature with colorful facade commercial buildings and urban landscape",
      title: "Civic Center"
    }
  ];

  const projectFeatures = [
    {
      icon: Building2,
      title: "Master Planning",
      description: "Comprehensive urban framework integrating multiple districts"
    },
    {
      icon: Leaf,
      title: "Sustainable Development", 
      description: "47% farmland and 5% wetlands preserved within urban fabric"
    },
    {
      icon: Network,
      title: "Green Infrastructure",
      description: "Innovative Green Bridge connecting districts over rail lines"
    },
    {
      icon: Users,
      title: "Mixed-Use Districts",
      description: "Balanced integration of commercial, residential and civic zones"
    }
  ];

  const projectSpecs = [
    {
      icon: Ruler,
      value: "3.82 million m²",
      label: "Total Development Area"
    },
    {
      icon: Calendar,
      value: "2013",
      label: "Project Completion"
    },
    {
      icon: MapPin,
      value: "Xi'an, China",
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
      <main>
        {/* Hero Section */}
        <section
          className="bg-cover bg-center bg-no-repeat relative min-h-screen flex items-center justify-center -mt-16 pt-16"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F15c3da6a8db9442f8dda1f0d04e1219f?format=webp&width=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="mb-16">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-page-title">
                <p>Xixian CBD</p>
              </h1>
              <div className="w-24 h-1 bg-white/80 mx-auto mb-8"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                A visionary master plan that redefines sustainable urbanization through innovative green infrastructure
              </p>
            </div>
          </div>
        </section>

        {/* Project Description */}
        <section className="bg-muted/10" style={{ padding: "80px 0 6px" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                <p>
                  Sustainable Urban Vision
                </p>
              </h2>

              <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  The Xixian Central Business District represents a paradigm shift in Chinese urban development—where conservation becomes the foundation for growth rather than its constraint. This comprehensive master plan demonstrates that sustainable urbanization can achieve both environmental stewardship and economic vitality.
                </p>

                <p>
                  Through meticulous planning, the design preserves 47% of existing farmland and 5% of critical wetlands, weaving these natural systems into the urban fabric as both amenity and infrastructure. The signature "Green Bridge" spans existing rail lines, creating unprecedented connectivity while respecting established transportation corridors.
                </p>

                <p>
                  This is urbanism as ecosystem—where each district functions as both autonomous neighborhood and integrated component of a larger metropolitan organism. The result transforms Xi'an's periphery into a model for China's sustainable urban future.
                </p>
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

        {/* Project Overview */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-8">
                  Urban Development Excellence
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    This master plan represents innovative thinking in contemporary urban development, balancing growth with conservation.
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

        {/* Design Principles */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Planning Principles
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

        {/* Environmental Impact */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/70 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                      Conservation Framework
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/60 mx-auto"></div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12 text-center">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2" data-testid="text-farmland-preservation">
                        47%
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
                        Farmland Preserved
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Productive agricultural land integrated within urban development
                      </p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2" data-testid="text-wetland-conservation">
                        5%
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
                        Wetlands Conserved
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Critical ecosystems maintained for biodiversity and water management
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Innovation Highlight */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Network className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    The Green Bridge Innovation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    A signature infrastructure intervention that transforms constraint into opportunity. 
                    This elevated green corridor spans existing rail lines, creating seamless pedestrian 
                    and ecological connectivity while preserving essential transportation infrastructure. 
                    The bridge serves as both urban amenity and environmental corridor, demonstrating 
                    how innovative design can solve complex urban challenges through integrated thinking.
                  </p>
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
