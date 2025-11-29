import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building, Compass, Mountain, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import project images
import vineyard1 from "@assets/IMG-20250918-WA0002_1759023615741.jpg";
import vineyard2 from "@assets/IMG-20250926-WA0010_1759023615877.jpg";
import villageStreet from "@assets/IMG-20250926-WA0011_1759023615917.jpg";
import hillsideView from "@assets/IMG-20250926-WA0009_1759023615953.jpg";
import sitePlan from "@assets/IMG-20250926-WA0012_1759023616037.jpg";
import hillsideArchitecture from "@assets/IMG-20250926-WA0005_1759023616070.jpg";
import modernVillage from "@assets/IMG-20250926-WA0004_1759023616106.jpg";

export default function CasablancaPlanning() {
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
      src: vineyard1,
      alt: "Elevated concrete pavilions over vineyard landscape at sunset",
      title: "Vineyard Pavilions"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2Fbd34e83a64a74cdb81946ca5301305de?format=webp&width=800",
      alt: "Concrete pavilion structure in vineyard landscape at sunset",
      title: "Concrete Pavilion"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F8d024611b9164176bc343eb4a0f26fcc?format=webp&width=800",
      alt: "Architectural visualization of interior space with landscaped view",
      title: "Interior Space"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F8a85e7d6225e4f5dafb3fd32eb6b484a?format=webp&width=800",
      alt: "Interior design with bookshelves and modern furnishings",
      title: "Library Interior"
    },
    {
      src: hillsideView,
      alt: "Terraced hillside development with mountain backdrop",
      title: "Terraced Development"
    },
    {
      src: villageStreet,
      alt: "Traditional village street with contemporary interventions",
      title: "Village Core"
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
    },
    {
      src: vineyard2,
      alt: "Modern architectural structures integrated with wine cultivation",
      title: "Landscape Integration"
    },
    {
      src: sitePlan,
      alt: "Aerial site plan showing Vinopolis development layout",
      title: "Master Plan"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2Fb1b2c64a505c46a79143bc4839a7bb57?format=webp&width=800",
      alt: "Nighttime architectural structures with illuminated pavilions in vineyard landscape",
      title: "Evening Pavilions"
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
      <main>
        {/* Hero Section */}
        <section
          className="bg-cover bg-center bg-no-repeat relative min-h-screen flex items-center justify-center -mt-16 pt-16"
          style={{
            backgroundImage: isDark
              ? `url('https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F21313099df214c3f8ef4d6321607aa24?format=webp&width=1920')`
              : `url('https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F10eb005d041148f4b80d1d1125c78fb7?format=webp&width=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="mb-16">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-page-title">
                <p>Vinopolis</p>
              </h1>
              <div className="w-24 h-1 bg-white/80 mx-auto mb-8"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Where contemporary architecture meets viticultural traditions
              </p>
            </div>
          </div>
        </section>

        {/* Project Description */}
        <section className="py-20 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                <p>
                  Vinopolis – where wine, architecture and landscape become a way of life
                </p>
              </h2>

              <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Vinopolis is an international wine-and-lifestyle project located on the plateau between Santiago and the Pacific Ocean, in the heart of Chile's renowned Casablanca Valley. Led by the Jade Valley wine family and architect Qingyun Ma, the project goes far beyond a classic winery: it is a place where vineyards, contemporary architecture and the Chilean landscape are woven into a cohesive environment for living, visiting and investing.
                </p>

                <p>
                  Guided by the philosophy of Vinopolis® – "the ideal city of wine", Vinopolis brings together three layers of experience:
                </p>

                <ul className="space-y-3 ml-6">
                  <li>
                    <p>
                      <strong style={{ fontSize: "14px" }}>Wine</strong>
                      <span style={{ fontSize: "14px" }}> </span>– premium wines
                      shaped by the cool-climate terroir of Casablanca;
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong style={{ fontSize: "14px" }}>Place</strong>
                      <span style={{ fontSize: "14px" }}> </span>– carefully
                      designed spaces for tasting, culture, sports and
                      nature;
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong style={{ fontSize: "14px" }}>Community</strong>
                      <span style={{ fontSize: "14px" }}> </span>– an
                      international neighborhood for residents, long-stay
                      guests and retirement-style living.
                    </p>
                  </li>
                </ul>

                <p>
                  Located within easy reach of both Santiago and Viña del Mar, Vinopolis is envisioned as a new hub on Chile's wine map: a destination where people come not only to taste wine, but to build a long-term relationship with the territory – through architecture, culture and a slower, more grounded way of life.
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
                        <p>12,400 m²</p>
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">
                        <p>Vacation Villas</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2" data-testid="text-community-area">
                        <p>9,900 m²</p>
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">
                        <p>Condo / Hotel</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2" data-testid="text-vineyard-area">
                        <p>5,200 m²</p>
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">
                        <p>Retail Commercial</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-12 border-t border-primary/20 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      <p>1,195,000 m²</p>
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">
                      <p>Total Area</p>
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
