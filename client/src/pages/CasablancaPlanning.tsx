import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building, Compass, Mountain } from "lucide-react";

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
                Casablanca Area Planning
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A visionary development where contemporary architecture 
                meets centuries-old viticultural traditions
              </p>
            </div>
          </div>
        </section>

        {/* Project Description */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                      Vineyard Urbanism
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/60 mx-auto mb-8"></div>
                  </div>
                  
                  <div className="space-y-8 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      The Casablanca Valley development represents a paradigm shift in 
                      agricultural urbanism—where architectural intervention becomes 
                      landscape stewardship. Each structure emerges from the earth 
                      as a celebration of the terroir, creating spaces for both 
                      cultivation and contemplation.
                    </p>
                    
                    <p>
                      Elevated pavilions punctuate the vineyard rows like modern 
                      follies, offering panoramic views while minimizing their 
                      footprint on productive soil. The village core weaves 
                      contemporary sensibilities through traditional morphology, 
                      creating intimate streetscapes that honor local building culture.
                    </p>
                    
                    <p>
                      This is architecture as choreography—a careful dance between 
                      built form and agricultural rhythm, where every gesture serves 
                      both aesthetic aspiration and functional necessity. The result 
                      is a place that feels inevitable, as if the landscape itself 
                      had always intended these forms to emerge.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Project Features */}
        <section className="py-16 bg-muted/20">
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

        {/* Image Gallery */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Project Visualization
              </h2>
              <div className="w-16 h-0.5 bg-primary/60 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the architectural vision through detailed renderings 
                and planning documentation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectImages.map((image, index) => (
                <Card key={index} className="overflow-hidden bg-card/70 backdrop-blur-sm hover-elevate" data-testid={`card-project-${index}`}>
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