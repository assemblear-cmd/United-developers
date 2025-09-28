import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Ruler, CheckCircle, Building2, Leaf, Network, Users } from "lucide-react";

// Import project images
import cbdOverview from "@assets/IMG_20250926_225621_1759024058656.jpg";
import modernComplex from "@assets/IMG_20250926_225554_1759024058744.jpg";
import waterFeature from "@assets/IMG_20250926_225530_1759024058808.jpg";

export default function XixianCBD() {
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
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6" data-testid="badge-project-type">
                Urban Planning
              </Badge>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-page-title">
                Xixian CBD
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A visionary master plan that redefines sustainable urbanization 
                through innovative green infrastructure and conservation principles
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
                  Sustainable Urban Vision
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    The Xixian Central Business District represents a paradigm shift 
                    in Chinese urban development—where conservation becomes the 
                    foundation for growth rather than its constraint. This comprehensive 
                    master plan demonstrates that sustainable urbanization can achieve 
                    both environmental stewardship and economic vitality.
                  </p>
                  
                  <p>
                    Through meticulous planning, the design preserves 47% of existing 
                    farmland and 5% of critical wetlands, weaving these natural systems 
                    into the urban fabric as both amenity and infrastructure. The 
                    signature "Green Bridge" spans existing rail lines, creating 
                    unprecedented connectivity while respecting established transportation corridors.
                  </p>
                  
                  <p>
                    This is urbanism as ecosystem—where each district functions as 
                    both autonomous neighborhood and integrated component of a 
                    larger metropolitan organism. The result transforms Xi'an's 
                    periphery into a model for China's sustainable urban future.
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
                Built Environment
              </h2>
              <div className="w-16 h-0.5 bg-primary/60 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contemporary architecture integrated within sustainable urban framework
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projectImages.map((image, index) => (
                <Card key={index} className="overflow-hidden bg-card/70 backdrop-blur-sm hover-elevate" data-testid={`card-image-${index}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      data-testid={`img-project-${index}`}
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