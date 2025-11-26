import Navigation from "@/components/Navigation";
import { useState } from "react";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building, Compass, Mountain, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import project images
import vineyard1 from "@assets/IMG-20250918-WA0002_1759023615741.jpg";
import vineyard2 from "@assets/IMG-20250926-WA0010_1759023615877.jpg";
import villageStreet from "@assets/IMG-20250926-WA0011_1759023615917.jpg";
import hillsideView from "@assets/IMG-20250926-WA0009_1759023615953.jpg";
import vineyard3 from "@assets/IMG-20250926-WA0010_1759023615998.jpg";
import sitePlan from "@assets/IMG-20250926-WA0012_1759023616037.jpg";
import hillsideArchitecture from "@assets/IMG-20250926-WA0005_1759023616070.jpg";
import modernVillage from "@assets/IMG-20250926-WA0004_1759023616106.jpg";

export default function CasablancaPlanning() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const projectImages = [
    { 
      src: vineyard1, 
      alt: "Elevated concrete pavilions over vineyard landscape at sunset",
      title: "Vineyard Pavilions"
    },
    { 
      src: vineyard2, 
      alt: "Modern architectural structures integrated with wine cultivation",
      title: "Landscape Integration"
    },
    { 
      src: villageStreet, 
      alt: "Traditional village street with contemporary interventions",
      title: "Village Core"
    },
    { 
      src: hillsideView, 
      alt: "Terraced hillside development with mountain backdrop",
      title: "Terraced Development"
    },
    { 
      src: vineyard3, 
      alt: "Geometric concrete structures in vineyard setting",
      title: "Architectural Elements"
    },
    { 
      src: sitePlan, 
      alt: "Aerial site plan showing Vinopolis development layout",
      title: "Master Plan"
    },
    { 
      src: hillsideArchitecture, 
      alt: "Contemporary hillside architecture with stone and glass",
      title: "Hillside Architecture"
    },
    { 
      src: modernVillage, 
      alt: "Modern village development with traditional materials",
      title: "Contemporary Village"
    }
  ];

  const projectFeatures = [
    {
      icon: Building,
      title: "Architectural Innovation",
      description: "Contemporary structures that honor the landscape"
    },
    {
      icon: Mountain,
      title: "Landscape Harmony",
      description: "Seamless integration with natural topography"
    },
    {
      icon: Compass,
      title: "Strategic Planning",
      description: "Masterful site organization and circulation"
    },
    {
      icon: MapPin,
      title: "Cultural Continuity",
      description: "Preserving regional architectural heritage"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-page-title">
                Casablanca Valley
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Where contemporary architecture meets viticultural traditions
              </p>
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
            
            <div className="flex items-center gap-8">
              {/* Left Navigation Button */}
              <Button
                onClick={() => setCarouselIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)}
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-muted"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              {/* Main Carousel Container */}
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-4">
                  {/* Left Small Image */}
                  <div className="col-span-1 flex items-center">
                    <Card className="overflow-hidden w-full bg-card/70 backdrop-blur-sm cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCarouselIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={projectImages[(carouselIndex - 1 + projectImages.length) % projectImages.length].src}
                          alt="Previous"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </Card>
                  </div>

                  {/* Center Large Image */}
                  <div className="col-span-2">
                    <Card className="overflow-hidden w-full h-full bg-card/70 backdrop-blur-sm cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setIsLightboxOpen(true)}>
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={projectImages[carouselIndex].src}
                          alt={projectImages[carouselIndex].alt}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          data-testid={`carousel-main-${carouselIndex}`}
                        />
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Row 2: Right small images */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="col-span-1"></div>
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    {/* Right Small Image 1 */}
                    <Card className="overflow-hidden bg-card/70 backdrop-blur-sm cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCarouselIndex((carouselIndex + 1) % projectImages.length)}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={projectImages[(carouselIndex + 1) % projectImages.length].src}
                          alt="Next"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </Card>

                    {/* Right Small Image 2 */}
                    <Card className="overflow-hidden bg-card/70 backdrop-blur-sm cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCarouselIndex((carouselIndex + 2) % projectImages.length)}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={projectImages[(carouselIndex + 2) % projectImages.length].src}
                          alt="Next Next"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Right Navigation Button */}
              <Button
                onClick={() => setCarouselIndex((prev) => (prev + 1) % projectImages.length)}
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-muted"
              >
                <ChevronRight className="h-6 w-6" />
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
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Main Image */}
              <img
                src={projectImages[carouselIndex].src}
                alt={projectImages[carouselIndex].alt}
                className="w-full h-full object-contain"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded text-sm">
                {carouselIndex + 1} / {projectImages.length}
              </div>

              {/* Navigation */}
              <button
                onClick={() => setCarouselIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => setCarouselIndex((prev) => (prev + 1) % projectImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}

        {/* Project Specifications */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/70 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                      Project Scope
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/60 mx-auto"></div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-12 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2" data-testid="text-commercial-area">
                        102,240 m²
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">
                        Commercial Street
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2" data-testid="text-community-area">
                        35,699 m²
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">
                        Community Cluster
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2" data-testid="text-vineyard-area">
                        39,571 m²
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">
                        Vineyard Integration
                      </div>
                    </div>
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
