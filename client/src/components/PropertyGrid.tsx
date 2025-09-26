import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PropertyCard from "./PropertyCard";
import villaImage from "@assets/generated_images/Villa_interior_luxury_b9aee9cd.png";
import industrialImage from "@assets/generated_images/Industrial_project_showcase_6b8c3f5b.png";
import heroImage from "@assets/generated_images/Luxury_Chilean_villa_hero_c78fe707.png";

// todo: remove mock functionality - replace with real data
const mockProperties = [
  {
    id: "villa-1",
    title: "Villa Cordillera Premium",
    location: "Las Condes, Santiago",
    price: "$2,850,000 USD",
    type: "Villa" as const,
    image: villaImage,
    bedrooms: 4,
    bathrooms: 3,
    area: "450 m²",
    status: "Disponible" as const,
    features: ["Piscina Infinita", "Vista Montañas", "Domótica", "Jardín Privado", "Garage Doble"]
  },
  {
    id: "villa-2",
    title: "Villa Costera Exclusiva",
    location: "Viña del Mar",
    price: "$3,200,000 USD",
    type: "Villa" as const,
    image: heroImage,
    bedrooms: 5,
    bathrooms: 4,
    area: "520 m²",
    status: "En Construcción" as const,
    features: ["Vista al Mar", "Terraza Privada", "Wine Cellar", "Spa Privado"]
  },
  {
    id: "industrial-1",
    title: "Centro Logístico Moderno",
    location: "Maipú, Santiago",
    price: "$5,200,000 USD",
    type: "Industrial" as const,
    image: industrialImage,
    area: "2,500 m²",
    status: "Disponible" as const,
    features: ["Tecnología Avanzada", "Eficiencia Energética", "Acceso Directo"]
  },
  {
    id: "villa-3",
    title: "Villa Arquitectónica Única",
    location: "Providencia, Santiago",
    price: "$2,650,000 USD",
    type: "Villa" as const,
    image: villaImage,
    bedrooms: 3,
    bathrooms: 2,
    area: "380 m²",
    status: "Vendido" as const,
    features: ["Diseño Contemporáneo", "Jardín Zen", "Oficina Privada", "Terraza"]
  },
  {
    id: "industrial-2",
    title: "Complejo Industrial Sustentable",
    location: "Quilicura, Santiago",
    price: "$7,800,000 USD",
    type: "Industrial" as const,
    image: industrialImage,
    area: "4,200 m²",
    status: "En Construcción" as const,
    features: ["Energía Solar", "Certificación LEED", "Múltiples Bodegas"]
  },
  {
    id: "villa-4",
    title: "Villa Minimalista Premium",
    location: "Lo Barnechea, Santiago",
    price: "$3,950,000 USD",
    type: "Villa" as const,
    image: heroImage,
    bedrooms: 6,
    bathrooms: 5,
    area: "680 m²",
    status: "Disponible" as const,
    features: ["Arquitectura Minimalista", "Piscina Olímpica", "Canchas Deportivas", "Cine Privado"]
  }
];

export default function PropertyGrid() {
  const [filter, setFilter] = useState<"all" | "Villa" | "Industrial">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "Disponible" | "En Construcción" | "Vendido">("all");

  const filteredProperties = mockProperties.filter(property => {
    const typeMatch = filter === "all" || property.type === filter;
    const statusMatch = statusFilter === "all" || property.status === statusFilter;
    return typeMatch && statusMatch;
  });

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestra Cartera de Propiedades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestras exclusivas villas de lujo y proyectos industriales de última generación en las mejores ubicaciones de Chile.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-muted-foreground">Tipo:</span>
            <div className="flex space-x-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                data-testid="button-filter-all"
              >
                Todos
              </Button>
              <Button
                variant={filter === "Villa" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("Villa")}
                data-testid="button-filter-villas"
              >
                Villas
              </Button>
              <Button
                variant={filter === "Industrial" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("Industrial")}
                data-testid="button-filter-industrial"
              >
                Industrial
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-muted-foreground">Estado:</span>
            <div className="flex space-x-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
                data-testid="button-status-all"
              >
                Todos
              </Button>
              <Button
                variant={statusFilter === "Disponible" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("Disponible")}
                data-testid="button-status-available"
              >
                Disponible
              </Button>
              <Button
                variant={statusFilter === "En Construcción" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("En Construcción")}
                data-testid="button-status-construction"
              >
                En Construcción
              </Button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8">
          <p className="text-center text-muted-foreground">
            Mostrando <span className="font-semibold" data-testid="text-results-count">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'propiedad' : 'propiedades'}
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>

        {/* No results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No se encontraron propiedades con los filtros seleccionados.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setFilter("all");
                setStatusFilter("all");
              }}
              data-testid="button-reset-filters"
            >
              Limpiar Filtros
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              data-testid="button-load-more"
            >
              Ver Más Propiedades
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}