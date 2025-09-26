import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  type: "Villa" | "Industrial";
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  status: "Disponible" | "En Construcción" | "Vendido";
  features: string[];
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  type,
  image,
  bedrooms,
  bathrooms,
  area,
  status,
  features
}: PropertyCardProps) {
  const handleViewDetails = () => {
    console.log(`Viewing details for property ${id}`);
  };

  const handleContact = () => {
    console.log(`Contacting about property ${id}`);
  };

  return (
    <Card className="group overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-property-${id}`}>
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-property-${id}`}
        />
        
        {/* Overlay badges */}
        <div className="absolute top-4 left-4 flex space-x-2">
          <Badge 
            variant={type === "Villa" ? "default" : "secondary"}
            className="text-xs font-medium"
            data-testid={`badge-type-${id}`}
          >
            {type}
          </Badge>
          <Badge 
            variant={status === "Disponible" ? "default" : status === "En Construcción" ? "secondary" : "outline"}
            className="text-xs font-medium"
            data-testid={`badge-status-${id}`}
          >
            {status}
          </Badge>
        </div>
        
        {/* Price overlay */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-md">
          <span className="font-semibold text-sm" data-testid={`text-price-${id}`}>{price}</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`text-title-${id}`}>
            {title}
          </h3>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm" data-testid={`text-location-${id}`}>{location}</span>
        </div>
        
        {/* Property details */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
          {bedrooms && (
            <div className="flex items-center space-x-1">
              <Bed className="h-4 w-4" />
              <span data-testid={`text-bedrooms-${id}`}>{bedrooms}</span>
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center space-x-1">
              <Bath className="h-4 w-4" />
              <span data-testid={`text-bathrooms-${id}`}>{bathrooms}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Square className="h-4 w-4" />
            <span data-testid={`text-area-${id}`}>{area}</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 3).map((feature, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="text-xs"
                data-testid={`badge-feature-${id}-${index}`}
              >
                {feature}
              </Badge>
            ))}
            {features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{features.length - 3} más
              </Badge>
            )}
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handleViewDetails}
            data-testid={`button-view-details-${id}`}
          >
            Ver Detalles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            className="flex-1"
            onClick={handleContact}
            data-testid={`button-contact-${id}`}
          >
            Contactar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}