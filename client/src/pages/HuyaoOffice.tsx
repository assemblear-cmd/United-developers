import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, CheckCircle, Building2, Users, Leaf, Grid } from "lucide-react";
import huyaoImage from "@assets/Screenshot_2025-09-27-18-45-22-455_cn.wps.xiaomi.abroad.lite-edit_1759009642993.jpg";

export default function HuyaoOffice() {
  const projectFeatures = [
    {
      icon: Building2,
      title: "Integrity & Integration",
      description: "Harmonious layout combining functionality, economy, and artistry"
    },
    {
      icon: Users,
      title: "Compound Functions",
      description: "Shared facilities fostering collaboration and community"
    },
    {
      icon: Leaf,
      title: "Sustainable Design",
      description: "Meeting sustainable development requirements through rational design"
    },
    {
      icon: Grid,
      title: "Unit Office Settlements",
      description: "Flexible workspace organization with outdoor platforms and gardens"
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
              <div className="font-serif text-3xl md:text-4xl text-muted-foreground mb-8">
                金桥31-08华药储运办公楼
              </div>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A sustainable office complex where integrated design creates 
                harmony between functionality, economy, and environmental stewardship
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-0 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F7588f1bbc045469daa5bcf57610b0cd8"
                alt="Huyao Office Building aerial view"
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
                  Integrated Workplace Design
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    充分结合功能性、经济性和艺术性，运用合理和谐的布局理念，以符合可持续发展要求。融入"整体性、融合性、开放性"等多种特点，设置功能复合，设施共享以便于基地空间的舒适，以秀建筑秩序、宜人的尺度、沉稳大气。结合区域发展战略与项目整体定位，设置科研、配套等功能，构建完善的功能体系。本项目设计以单元式办公聚落及室外平台、屋顶花园和中央花园廊道为基础，形成围合形状建筑主体，与基地周围建筑及自然环境的整体规划融为一个整体。
                  </p>
                  
                  <p>
                    With the integration of "integrity, integration, openness" and other characteristics, 
                    functions are set up to compound, facilities are shared, to ensure the comfort of the 
                    base space, and to show the building in order, pleasant scale, calm atmosphere. 
                    Combined with the regional development strategy and the overall positioning of 
                    the project, the functions of scientific research and supporting are set up to build 
                    a perfect functional system. The design of this project is based on the unit office 
                    settlement, outdoor platform, roof garden and central garden corridor, forming the 
                    enclosed shape building body, which is integrated into the overall planning of the 
                    surrounding buildings and natural environment.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
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
                  src={huyaoImage}
                  alt="Huyao Office Building detail view"
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

        {/* Garden Integration */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Leaf className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Layered Garden System
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    The project employs a multi-level garden strategy integrating outdoor platforms, 
                    roof gardens, and central garden corridors. This creates an enclosed building form 
                    that merges seamlessly with surrounding structures and the natural environment. 
                    The result is a comprehensive functional ecosystem where scientific research and 
                    support activities unfold within a framework of pleasant scale and calm atmosphere, 
                    meeting both programmatic needs and sustainability objectives.
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
