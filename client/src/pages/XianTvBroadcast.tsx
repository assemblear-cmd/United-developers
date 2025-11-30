import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Ruler, CheckCircle, Building2, Landmark, Layers, Circle } from "lucide-react";
import xianTvImage1 from "@assets/Screenshot_2025-09-26-21-28-59-212_cn.wps.xiaomi.abroad.lite-edit_1758934379116.jpg";
import xianTvImage2 from "@assets/IMG_20250926_212722_1758934379201.jpg";
import xianTvImage3 from "@assets/IMG_20250926_212654_1758934379250.jpg";
import xianTvImage4 from "@assets/IMG_20250926_212613_1758934379302.jpg";
import xianTvImage5 from "@assets/IMG_20250926_212548_1758934379341.jpg";

export default function XianTvBroadcast() {
  const projectImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2Fe861bd37fa0a49b889bf3b4a3196b886",
      alt: "Xi'an TV Broadcast Center exterior showing symbolic wall design",
      title: "Symbolic Wall Design"
    },
    { 
      src: xianTvImage2, 
      alt: "Xi'an TV Broadcast Center aerial view showcasing integrated complex",
      title: "Media City Complex"
    },
    { 
      src: xianTvImage3, 
      alt: "Interior courtyard with modern architecture",
      title: "Central Courtyard"
    },
    { 
      src: xianTvImage4, 
      alt: "Architectural detail showing Han Tang cultural elements",
      title: "Cultural Integration"
    },
    { 
      src: xianTvImage5, 
      alt: "Building facade with contemporary materials",
      title: "Modern Expression"
    }
  ];

  const projectFeatures = [
    {
      icon: Landmark,
      title: "Han Tang Heritage",
      description: "Inherits the generosity, concise and stately characteristics of Xi'an's Han Tang culture"
    },
    {
      icon: Layers,
      title: "Integrated Whole",
      description: "Diversified programs enclosed as a unified complex enhancing scale perception"
    },
    {
      icon: Building2,
      title: "Symbolic Wall",
      description: "Metaphorical representation suggesting the Land Art temperament of Xi'an Wall"
    },
    {
      icon: Circle,
      title: "Media City Concept",
      description: "Architectural metaphor representing a comprehensive Media City environment"
    }
  ];

  const projectSpecs = [
    {
      icon: Ruler,
      value: "81,117 m²",
      label: "Total Area"
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
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6" data-testid="badge-project-type">
                Commercial
              </Badge>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-page-title">
                Xi'an TV Broadcast Center
              </h1>
              <div className="font-serif text-3xl md:text-4xl text-muted-foreground mb-8">
                西安广电中心
              </div>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A media complex that embodies the cultural heritage of Xi'an 
                while creating a contemporary symbol of broadcast innovation
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-0 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2Fe861bd37fa0a49b889bf3b4a3196b886"
                alt="Xi'an TV Broadcast Center"
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
                  Cultural Expression in Modern Media
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    本项目设计承袭了西安汉唐文化中表现出的舒展大度、简洁雄浑的特征，使建筑群落整体布置、整体设计融为一体，并以此样式了综合建筑面积的尺度概念。整体建筑中的诸多功能由一道有象征意义的"墙"围合在一起，暗示了西安城墙大地艺术的气质，又合理的统一解决了四周的场地标高不同的问题，同时，还表达了广安广电"媒体城"的寓意。
                  </p>
                  
                  <p>
                    This project inherits the generosity, concise and stately characteristic of Han Tang 
                    culture of Xi'an, which expressed by integrated as a whole and enhances the scale 
                    perception under determined site area condition. Diversified programs are enclosed 
                    by a symbolic "wall" not only to suggest the Land Art temperament of Xi'an Wall, but 
                    also solved the problem of contour difference on the site around, at the same time 
                    it metaphors Xi'an TV is a "Media City".
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
                Architectural Expression
              </h2>
              <div className="w-16 h-0.5 bg-primary/60 mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectImages.slice(1).map((image, index) => (
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
      </main>
      <Footer />
    </div>
  );
}
