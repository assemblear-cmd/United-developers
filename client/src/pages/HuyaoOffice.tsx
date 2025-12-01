import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building2, CheckCircle, Leaf, Users, Zap, Layout } from "lucide-react";

// Import project images
import huyaoImage from "@assets/Screenshot_2025-09-27-18-45-22-455_cn.wps.xiaomi.abroad.lite-edit_1759009642993.jpg";

export default function HuyaoOffice() {
  const projectImages = [
    { 
      src: huyaoImage, 
      alt: "Huyao Office Building aerial view showing integrated courtyard and surrounding urban context",
      title: "Integrated Development"
    }
  ];

  const projectFeatures = [
    {
      icon: Building2,
      title: "Integrity & Integration",
      description: "Unified design approach combining functionality, economy and artistry"
    },
    {
      icon: Leaf,
      title: "Landscape Integration",
      description: "Seamless incorporation into surrounding buildings and natural environment"
    },
    {
      icon: Layout,
      title: "Unit Office Settlements",
      description: "Modular office design with outdoor platforms and roof gardens"
    },
    {
      icon: Users,
      title: "Shared Facilities",
      description: "Compound functions with shared resources ensuring comfort and efficiency"
    }
  ];

  const projectSpecs = [
    {
      icon: Calendar,
      value: "2021",
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
    },
    {
      icon: Zap,
      value: "Commercial",
      label: "Project Type"
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
                Commercial
              </Badge>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-page-title">
                Huyao Office Building
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Functionality, economy and artistry unified through rational and harmonious design concepts
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
                  Integrated Design Excellence
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    The Huyao Office Building represents a comprehensive approach to contemporary commercial architecture in Shanghai. The design combines functionality, economy, and artistry through rational and harmonious layout concepts that meet the highest standards of sustainable development.
                  </p>
                  
                  <p>
                    The project exemplifies the integration of "integrity, integration, and openness" characteristics. Functions are thoughtfully compounded while facilities are intelligently shared, ensuring optimal comfort of base spaces while maintaining a pleasant scale and calm atmosphere throughout the building.
                  </p>
                  
                  <p>
                    The design strategy incorporates unit office settlements, outdoor platforms, roof gardens, and central garden corridors. This creates an enclosed building form that respects and integrates with the overall planning of surrounding structures and the natural environment, resulting in a cohesive urban composition.
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
                Contemporary commercial architecture integrated within urban context
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

        {/* Spatial Organization */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/70 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                      Functional Organization Strategy
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/60 mx-auto"></div>
                  </div>
                  
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      The Huyao Office Building is designed on the principle of unit office settlements, creating a network of interconnected workspaces with clear organizational logic. Each unit maintains independence while contributing to the cohesive whole.
                    </p>
                    
                    <p>
                      Outdoor platforms and roof gardens are strategically distributed throughout the structure, providing respite spaces and enhancing the connection between interior work environments and natural light. These features collectively improve workplace quality of life and environmental performance.
                    </p>
                    
                    <p>
                      The central garden corridor serves as the organizing spine, facilitating circulation and creating opportunities for informal interaction and community building. This design approach balances the functional requirements of a modern office building with human-centered spatial qualities, resulting in a workplace that supports both productivity and wellbeing.
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
