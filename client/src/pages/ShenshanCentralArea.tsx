import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Ruler, CheckCircle, Leaf, Zap, Users, Compass } from "lucide-react";

// Import project images
import shenshanImage from "@assets/Screenshot_2025-09-27-18-49-24-999_cn.wps.xiaomi.abroad.lite-edit_1759009870282.jpg";

export default function ShenshanCentralArea() {
  const projectImages = [
    { 
      src: shenshanImage, 
      alt: "Shenzhen-Shantou Special Cooperation Zone Central Area master plan showing geographic location and development zones",
      title: "Master Plan Overview"
    }
  ];

  const projectFeatures = [
    {
      icon: Leaf,
      title: "Ecological Balance",
      description: "Integration of natural systems with urban development, preserving ecological integrity"
    },
    {
      icon: Users,
      title: "Pastoral City Model",
      description: "Creating 'ecological pastoral city' through landscape and countryside preservation"
    },
    {
      icon: Compass,
      title: "Regional Identity",
      description: "Highlighting local characteristics and regional distinctiveness in urban design"
    },
    {
      icon: Zap,
      title: "Cross-Industry Innovation",
      description: "Promoting innovation hubs and industry collaboration through integrated planning"
    }
  ];

  const projectSpecs = [
    {
      icon: Ruler,
      value: "68 km²",
      label: "Total Development Area"
    },
    {
      icon: Ruler,
      value: "10 km²",
      label: "Urban Core Area"
    },
    {
      icon: Calendar,
      value: "2025",
      label: "Expected Completion"
    },
    {
      icon: CheckCircle,
      value: "In Progress",
      label: "Project Status"
    }
  ];

  const planningStrategies = [
    {
      number: "I",
      title: "Eternal Clear-Cut Urban Space Framework",
      description: "Constructing a permanent and clear-cut visual framework for the ideal city in space"
    },
    {
      number: "II",
      title: "Ecological Pastoral Urban Space Management",
      description: "Forming distinct and systematic pastoral urban space skeleton management"
    },
    {
      number: "III",
      title: "Mountainous Urban Space Composition",
      description: "Creating diverse and dynamic urban spatial composition in mountainous terrain"
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
                Shenzhen-Shantou Special<br />Cooperation Zone
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Pioneering new urban development paradigms that balance countryside preservation, ecological sustainability, and industry innovation
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
                  Ecological Pastoral Vision
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    The Shenzhen-Shantou Special Cooperation Zone Central Area Planning represents a pioneering approach to contemporary urban development in China. Located approximately 120 kilometers from Shenzhen's center, the zone encompasses 68 square kilometers with a 10 square kilometer urban core designated for intensive development.
                  </p>
                  
                  <p>
                    The project's core objective integrates water resources management with regional character preservation, balancing the return to farmland and pastoral qualities with contemporary urban development. This comprehensive strategy aims to create an "ecological pastoral city" that serves as a new model for sustainable urban development across China.
                  </p>
                  
                  <p>
                    As chief urban and rural planner, the design implements a comprehensive framework that protects pastoral areas, maintains ecological systems, and promotes cross-industry innovation. The planning approach prioritizes lifecycle management concepts to ensure sustainable operation and long-term viability of the entire development.
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
                Development Plan
              </h2>
              <div className="w-16 h-0.5 bg-primary/60 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master plan visualization showing regional integration and development zones
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

        {/* Planning Strategies */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Three-Pillar Planning Strategy
              </h2>
              <div className="w-16 h-0.5 bg-primary/60 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {planningStrategies.map((strategy, index) => (
                <Card key={index} className="text-center bg-card/70 backdrop-blur-sm hover-elevate">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">{strategy.number}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      {strategy.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {strategy.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Core Design Principles
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

        {/* Lifecycle Management */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/70 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                      Lifecycle Management Framework
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/60 mx-auto"></div>
                  </div>
                  
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      The development plan incorporates comprehensive lifecycle management concepts to ensure sustainable operation and long-term viability. This approach governs all aspects of the zone's development, from initial planning through construction and ongoing management.
                    </p>
                    
                    <p>
                      A "blue print management" system provides oversight of the entire planning vision, ensuring that implementation remains faithful to the original ecological and economic objectives. This systematic approach to governance and stewardship creates a framework for successful long-term development.
                    </p>
                    
                    <p>
                      By integrating these management principles throughout the planning process, the zone can maintain its commitment to ecological preservation, regional character, and economic innovation while adapting to changing conditions and emerging opportunities over time.
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
