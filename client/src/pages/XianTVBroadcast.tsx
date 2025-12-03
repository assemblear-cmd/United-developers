import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Ruler, CheckCircle, Building2, Palette, Users, Landmark, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Import project images
import xianTVImage from "@assets/IMG_20250926_212722_1758934379201.jpg";

export default function XianTVBroadcast() {
  const { t } = useTranslation();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      src: xianTVImage,
      alt: "Xi'an TV Broadcast Center showing distinctive architectural design with symbolic wall and modernist forms",
      title: "Media City Icon"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F54445f0c76ec462f86628c5cf0eb2c37?format=webp&width=1200",
      alt: "Modern broadcast center with distinctive architectural forms and landscaped plaza",
      title: "Broadcast Facility"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F07d721c7fb254c3f89a0701c8221d68e?format=webp&width=1200",
      alt: "Architectural facade with geometric window patterns and metal cladding",
      title: "Geometric Architecture"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F1f5a5d3ed4934e1795933a776d0d3cce?format=webp&width=1200",
      alt: "Modern triangular building facade with distinctive window elements",
      title: "Angular Design"
    }
  ];

  const projectFeatures = [
    {
      icon: Building2,
      title: "Han Tang Heritage",
      description: "Generosity, concise and stately characteristics of Han Tang culture of Xi'an integrated throughout"
    },
    {
      icon: Palette,
      title: "Land Art Aesthetic",
      description: "Symbolic wall suggests Land Art temperament of Xi'an Wall, creating cultural continuity"
    },
    {
      icon: Landmark,
      title: "Site Integration",
      description: "Solves contour difference problem on site while enhancing overall design composition"
    },
    {
      icon: Users,
      title: "Diverse Programming",
      description: "Varied program functions enclosed within unified symbolic architectural expression"
    }
  ];

  const projectSpecs = [
    {
      icon: Ruler,
      value: "81,117 m²",
      label: "Total Building Area"
    },
    {
      icon: Calendar,
      value: "2009",
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
      <main className="pt-16">
        {/* Hero Section */}
        <section
          className="bg-cover bg-center bg-no-repeat relative min-h-screen flex items-center justify-center -mt-16 pt-16"
          style={{
            backgroundImage: isDark
              ? `url('https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F0a4c23a37acc483ca585dd02d6851096?format=webp&width=1920')`
              : `url('https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2Fbe2fa3b85c4a4eba97cb2499fe0b241c?format=webp&width=1920')`,
            filter: isDark ? 'brightness(0.6) contrast(1.1)' : 'brightness(1) contrast(1)',
          }}
        >
          <div className={`absolute inset-0 ${isDark ? 'bg-black/30' : 'bg-black/40'}`}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="mb-16">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-page-title">
                <p>
                  <span style={{color: 'rgb(255, 255, 255)'}}>
                    {t('projects.xiantv.title')}
                  </span>
                </p>
              </h1>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                <span style={{color: 'rgb(255, 255, 255)'}}>
                  {t('projects.xiantv.subtitle')}
                </span>
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
                  {t('projects.xiantv.heading')}
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    {t('projects.xiantv.content1')}
                  </p>

                  <p>
                    {t('projects.xiantv.content2')}
                  </p>
                  
                  <p>
                    The building metaphorically presents Xi'an TV as a "Media City"—a vibrant center for broadcasting and cultural expression. Through its distinctive architectural vocabulary, the center becomes a symbol of Xi'an's role in China's media landscape while honoring the city's profound cultural traditions.
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
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                {t('common.gallery')}
              </h2>
              <div className="w-16 h-0.5 bg-primary/60 mx-auto mb-4 md:mb-8"></div>
            </div>

            <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-8 w-full max-w-5xl mx-auto">
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

        {/* Symbolic Wall Strategy */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/70 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                      The Symbolic Wall Concept
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/60 mx-auto"></div>
                  </div>
                  
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      At the heart of the design lies the innovative concept of the symbolic wall—an architectural element that references Xi'an's historic city walls while serving contemporary functional needs. This wall enclosure creates a unified expression for the diverse broadcast programming within the center.
                    </p>
                    
                    <p>
                      Beyond its cultural significance, the wall solves the practical challenge of contour differences across the site, transforming a potential constraint into an opportunity for creative architectural expression. The wall's presence metaphorically connects Xi'an TV to the city's profound heritage while establishing its role as a modern "Media City."
                    </p>
                    
                    <p>
                      This design approach demonstrates how contemporary architecture can honor cultural traditions while meeting the functional requirements of a modern broadcast facility. The result is a building that serves both practical and symbolic purposes, creating a landmark that strengthens Xi'an's identity as a vibrant media and cultural center.
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
