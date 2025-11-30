import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Ruler, Timer, Building2, Leaf, Network, Mountain } from "lucide-react";
import shenshanImage from "@assets/Screenshot_2025-09-27-18-49-24-999_cn.wps.xiaomi.abroad.lite-edit_1759009870282.jpg";

export default function ShenshanZone() {
  const projectFeatures = [
    {
      icon: Mountain,
      title: "Countryside Preservation",
      description: "Protecting pastoral landscapes within urban development framework"
    },
    {
      icon: Leaf,
      title: "Ecological Sustainability",
      description: "Maintaining natural systems as integral urban infrastructure"
    },
    {
      icon: Network,
      title: "Cross-Industry Innovation",
      description: "Fostering collaboration across diverse economic sectors"
    },
    {
      icon: Building2,
      title: "Integrated Design",
      description: "Holistic approach balancing multiple development objectives"
    }
  ];

  const projectSpecs = [
    {
      icon: Ruler,
      value: "120 km",
      label: "Distance from Shenzhen Center"
    },
    {
      icon: Ruler,
      value: "68 km²",
      label: "Central Area"
    },
    {
      icon: Calendar,
      value: "2025",
      label: "Target Completion"
    },
    {
      icon: Timer,
      value: "In Progress",
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
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-page-title">
                Shenzhen-Shantou Special Cooperation Zone
                <br />
                Central Area Planning
              </h1>
              <div className="font-serif text-2xl md:text-3xl text-muted-foreground mb-8">
                深汕特别合作区中心区规划
              </div>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Pioneering a new paradigm where urban development harmonizes with 
                countryside preservation, ecological integrity, and economic innovation
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-0 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F216c36246d4d4da79e17244450801e1b"
                alt="Shenzhen-Shantou Special Cooperation Zone aerial plan"
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
                  A New Model for Urban Development
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    深汕特别合作区距深圳市中心约120公里，中心区位于合作区赤石河东岸，约68平方公里，其中水域约2.6平方公里，其中水面约1.5平方公里，陆地约67.4平方公里。本次规划的目标是结合山水特征，突出地域特色，回归田园城市理想，打造"岭南新田园都市"，塑造一个与众不同的深汕中心区。
                  </p>

                  <p className="text-lg">
                    总体规划工作提出三大核心策略：策略一：构建恰久弥新的理想城市空间框架；策略二：形成疏密有致的田园城市空间肌理；策略三：打造依山就势的立体城市空间形态；通过深汕中心区总师团队陪伴式技术保障制度，以"全生命周期"管理理念，确保"一张蓝图管到底"的设计可行、理想落地。
                  </p>
                  
                  <p>
                    Xixian, after old vicissitudes of prosperous ushered in the new era has given life, 
                    modernization in the city of rapid evolution, and in the back of a rapid development, 
                    the city also gradually appear in the phenomenon of qualitative, we need to do is 
                    to add a form of updates to the city, we in the region will shape a fully functional 
                    community. It not only provides modern and high-end office and business 
                    environment and image, but also integrates hotel and business functions to solve 
                    the needs of catering, entertainment, leisure and other needs, shaping a complex 
                    of urban functions.
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
                  src={shenshanImage}
                  alt="Shenzhen-Shantou Zone planning detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Planning Strategies */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Core Strategies
              </h2>
              <div className="w-16 h-0.5 bg-primary/60 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three strategic approaches defining the Lingnan New Pastoral City
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-card/70 backdrop-blur-sm hover-elevate">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">01</div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Enduring Spatial Framework
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Constructing an ideal urban spatial framework that balances timeless principles 
                    with contemporary innovation
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/70 backdrop-blur-sm hover-elevate">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">02</div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Pastoral Spatial Texture
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Creating varied density patterns that maintain pastoral character within 
                    urban development
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/70 backdrop-blur-sm hover-elevate">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">03</div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Topographic Integration
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Crafting three-dimensional urban forms that respond to mountainous terrain 
                    and natural contours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="py-16 bg-muted/20">
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

        {/* Life Cycle Management */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Network className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Full Life-Cycle Management
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Through an accompanying technical support system led by the chief planning team, 
                    the project employs a "full life-cycle" management philosophy. This ensures that 
                    "one blueprint is implemented to the end"—guaranteeing that design concepts remain 
                    viable and ideals are realized throughout every phase of development, from initial 
                    planning through final implementation.
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
