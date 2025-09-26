import { Card, CardContent } from "@/components/ui/card";
import { Building, Home, Award, Users, Star, MapPin } from "lucide-react";

export default function CompanyStats() {
  const stats = [
    {
      icon: Home,
      number: "25+",
      label: "Villas de Lujo",
      description: "Propiedades exclusivas desarrolladas"
    },
    {
      icon: Building,
      number: "15+",
      label: "Proyectos Industriales",
      description: "Complejos comerciales e industriales"
    },
    {
      icon: Users,
      number: "150+",
      label: "Clientes Satisfechos",
      description: "Familias y empresas que confían en nosotros"
    },
    {
      icon: Award,
      number: "8",
      label: "Premios de Excelencia",
      description: "Reconocimientos en arquitectura y diseño"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Calificación Promedio",
      description: "Evaluación de nuestros clientes"
    },
    {
      icon: MapPin,
      number: "12",
      label: "Ubicaciones Premium",
      description: "En las mejores zonas de Chile"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestra Trayectoria en Números
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de una década desarrollando propiedades excepcionales que definen el lujo y la innovación en Chile.
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
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3" data-testid="value-excellence">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground">Excelencia</h4>
              <p className="text-sm text-muted-foreground">
                Compromiso con la calidad superior en cada detalle de nuestros proyectos.
              </p>
            </div>
            
            <div className="space-y-3" data-testid="value-innovation">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Building className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground">Innovación</h4>
              <p className="text-sm text-muted-foreground">
                Incorporamos las últimas tecnologías y tendencias en diseño arquitectónico.
              </p>
            </div>
            
            <div className="space-y-3" data-testid="value-sustainability">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground">Sustentabilidad</h4>
              <p className="text-sm text-muted-foreground">
                Desarrollo responsable que respeta el medio ambiente y las comunidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}