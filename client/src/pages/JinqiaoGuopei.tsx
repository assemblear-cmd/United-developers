import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Ruler, CheckCircle, Building2, Network, Layers, TreePine } from "lucide-react";
import jinqiaoImage from "@assets/Screenshot_2025-09-27-15-36-36-976_cn.wps.xiaomi.abroad.lite-edit_1759009184273.jpg";

export default function JinqiaoGuopei() {
  const projectFeatures = [
    {
      icon: Building2,
      title: "High-Complexity Configuration",
      description: "Multi-dimensional spatial interleaving creating visual symbol of international metropolis"
    },
    {
      icon: Network,
      title: "Resource Maximization",
      description: "Optimal integration of land, public, and commercial resources"
    },
    {
      icon: Layers,
      title: "Infrastructure Integration",
      description: "Seamless connection with elevated infrastructure systems"
    },
    {
      icon: TreePine,
      title: "Jiangnan Garden Elements",
      description: "Traditional landscape features woven into contemporary design"
    }
  ];

  const projectSpecs = [
    {
      icon: Ruler,
      value: "140,000 m²",
      label: "Total Area"
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
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6" data-testid="badge-project-type">
                Commercial
              </Badge>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-page-title">
                Jinqiao Guopei 1851
              </h1>
              <div className="font-serif text-3xl md:text-4xl text-muted-foreground mb-8">
                上海金桥国培1851
              </div>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A mixed-use commercial complex that redefines urban integration 
                through sophisticated spatial orchestration and cultural synthesis
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-0 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2Fe929fb5c886040218c1ac8613bad57dd"
                alt="Jinqiao Guopei 1851 aerial view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-8">
                  Urban Complexity Reimagined
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    金桥国培中心地块最大化利用国家土地资源、最大化赋能公共资源，最大化激活商业资源。设计利用复合度功能配置、多元化空间交错，创造了一国际化大都市的视觉标志物。建筑利用地西侧高架桥的视觉优势，整合诸房的顶部界面。并营造一系列的江南园林，使历史成为一个从高架路的新视平线和视觉主题。高架下的裙房如太湖石，内外交融，虚实相间，构成副中心的世界交换器和活动过滤器。
                  </p>
                  
                  <p>
                    The plot of Jinqiao National Training Center maximizes the use of national land 
                    resources, the empowerment of public resources, and the activation of commercial 
                    resources. The design creates a visual symbol of an international metropolis by using 
                    the function configuration of high complexity and multi-dimensional interleaving. The 
                    building takes the advantage of the viaduct on the west side of the site to integrate 
                    the top interface of the podium. And create a series of Jiangnan gardens, so that 
                    history becomes a new visual level line and visual theme from the elevated road. The 
                    podium under the viaduct, like Taihu stone, blends inside and outside, alternating 
                    between virtual and real, forming a sub-central world exchanger and active filter.
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

        {/* Additional Project Image */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden bg-card/70 backdrop-blur-sm">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={jinqiaoImage}
                  alt="Jinqiao Guopei 1851 complex detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Design Principles */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Design Strategies
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

        {/* Viaduct Integration */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Network className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Viaduct as Urban Catalyst
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    The project transforms an infrastructural constraint into architectural opportunity. 
                    The elevated viaduct on the site's western edge becomes a defining element, with 
                    the podium spaces beneath conceived as contemporary interpretations of Taihu stones—
                    blending solid and void, interior and exterior. This creates a dynamic "world exchanger" 
                    at the sub-center scale, filtering activities and connections while integrating Jiangnan 
                    garden traditions into metropolitan Shanghai.
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
