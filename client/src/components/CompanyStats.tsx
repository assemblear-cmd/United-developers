import { Card, CardContent } from "@/components/ui/card";
import { Building, Home, Award, Users, Star, MapPin } from "lucide-react";

export default function CompanyStats() {
  const stats = [
    {
      icon: Building,
      number: "100+",
      label: "Completed Projects",
      description: "Innovative architectural solutions delivered"
    },
    {
      icon: Home,
      number: "25+",
      label: "Project Expertise",
      description: "Pioneering architectural practice since 1999"
    },
    {
      icon: Users,
      number: "50+",
      label: "Team Members",
      description: "International professionals from around the world"
    },
    {
      icon: Award,
      number: "15+",
      label: "International Awards",
      description: "Recognition for architectural excellence"
    },
    {
      icon: Star,
      number: "3",
      label: "Global Offices",
      description: "Shanghai, Los Angeles, Beijing"
    },
    {
      icon: MapPin,
      number: "15+",
      label: "Countries",
      description: "International project portfolio"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over two decades of architectural innovation, bridging Eastern and Western design philosophies across the Pacific Rim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`card-stat-${index}`}>
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" data-testid={`icon-stat-${index}`} />
                    </div>
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2" data-testid={`text-number-${index}`}>
                    {stat.number}
                  </div>
                  
                  <h3 className="font-semibold text-lg text-foreground mb-2" data-testid={`text-label-${index}`}>
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground" data-testid={`text-description-${index}`}>
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Values */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3" data-testid="value-excellence">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground">Excellence</h4>
              <p className="text-sm text-muted-foreground">
                Commitment to superior quality in every detail of our architectural projects.
              </p>
            </div>
            
            <div className="space-y-3" data-testid="value-innovation">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Building className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Incorporating cutting-edge technology and architectural design trends.
              </p>
            </div>
            
            <div className="space-y-3" data-testid="value-sustainability">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground">Cultural Bridge</h4>
              <p className="text-sm text-muted-foreground">
                Bridging Eastern and Western design philosophies in contemporary architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}