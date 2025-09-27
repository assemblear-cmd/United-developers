import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Square, ArrowRight, Building, Home, Factory, Palette } from "lucide-react";
import villaImage from "@assets/stock_images/luxury_residential_v_fcfa0e39.jpg";
import industrialImage from "@assets/stock_images/contemporary_office__a4a1a738.jpg";
import heroImage from "@assets/stock_images/modern_architectural_53e85b78.jpg";
import architecturalImage1 from "@assets/stock_images/modern_architectural_6a608d26.jpg";
import architecturalImage2 from "@assets/stock_images/modern_architectural_d27ef126.jpg";
import urbanImage from "@assets/stock_images/contemporary_office__b1c6c790.jpg";
import residentialImage from "@assets/stock_images/luxury_residential_v_2a62c92a.jpg";
import xianTvImage1 from "@assets/Screenshot_2025-09-26-21-28-59-212_cn.wps.xiaomi.abroad.lite-edit_1758934379116.jpg";
import xianTvImage2 from "@assets/IMG_20250926_212722_1758934379201.jpg";
import xianTvImage3 from "@assets/IMG_20250926_212654_1758934379250.jpg";
import xianTvImage4 from "@assets/IMG_20250926_212613_1758934379302.jpg";
import xianTvImage5 from "@assets/IMG_20250926_212548_1758934379341.jpg";

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  year: string;
  type: "Urban Planning" | "Architecture" | "Interior Design" | "Visual Design";
  image: string;
  area?: string;
  status: "Completed" | "In Progress" | "Award Winner";
  description: string;
  features: string[];
}

function ProjectCard({
  id,
  title,
  location,
  year,
  type,
  image,
  area,
  status,
  description,
  features
}: ProjectCardProps) {
  const handleViewDetails = () => {
    console.log(`Viewing details for project ${id}`);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Urban Planning": return Building;
      case "Architecture": return Home;
      case "Interior Design": return Palette;
      case "Visual Design": return Factory;
      default: return Building;
    }
  };

  const TypeIcon = getTypeIcon(type);

  return (
    <Card className="group overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-project-${id}`}>
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-project-${id}`}
        />
        
        {/* Overlay badges */}
        <div className="absolute top-4 left-4 flex space-x-2">
          <Badge 
            variant="default"
            className="text-xs font-medium flex items-center space-x-1"
            data-testid={`badge-type-${id}`}
          >
            <TypeIcon className="h-3 w-3" />
            <span>{type}</span>
          </Badge>
          <Badge 
            variant={status === "Completed" ? "secondary" : status === "In Progress" ? "outline" : "default"}
            className="text-xs font-medium"
            data-testid={`badge-status-${id}`}
          >
            {status}
          </Badge>
        </div>
        
        {/* Year overlay */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-md">
          <span className="font-semibold text-sm" data-testid={`text-year-${id}`}>{year}</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`text-title-${id}`}>
            {title}
          </h3>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm" data-testid={`text-location-${id}`}>{location}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`text-description-${id}`}>
          {description}
        </p>
        
        {/* Project details */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span data-testid={`text-year-detail-${id}`}>{year}</span>
          </div>
          {area && (
            <div className="flex items-center space-x-1">
              <Square className="h-4 w-4" />
              <span data-testid={`text-area-${id}`}>{area}</span>
            </div>
          )}
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
                +{features.length - 3} more
              </Badge>
            )}
          </div>
        </div>
        
        {/* Action button */}
        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleViewDetails}
          data-testid={`button-view-details-${id}`}
        >
          View Project Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

// todo: remove mock functionality - replace with real United Developers projects
const unitedDevelopersProjects = [
  {
    id: "xixi-wetland",
    title: "Xixi Wetland Cultural Complex",
    location: "Hangzhou, China",
    year: "2018",
    type: "Architecture" as const,
    image: architecturalImage1,
    area: "15,000 m²",
    status: "Award Winner" as const,
    description: "A cultural complex that integrates contemporary architecture with natural wetland ecosystem, showcasing United Developers' philosophy of harmonious development.",
    features: ["Sustainable Design", "Cultural Integration", "Wetland Preservation", "Contemporary Architecture"]
  },
  {
    id: "centennial-hall",
    title: "USC Centennial Hall",
    location: "Los Angeles, USA",
    year: "2010",
    type: "Architecture" as const,
    image: architecturalImage2,
    area: "8,500 m²",
    status: "Completed" as const,
    description: "Academic building reflecting United Developers' cross-cultural design approach, bridging Eastern and Western architectural philosophies.",
    features: ["Academic Excellence", "Cross-Cultural Design", "Innovation Hub", "LEED Certified"]
  },
  {
    id: "qingpu-masterplan",
    title: "Qingpu District Urban Planning",
    location: "Shanghai, China",
    year: "2020",
    type: "Urban Planning" as const,
    image: urbanImage,
    area: "2.5 km²",
    status: "In Progress" as const,
    description: "Comprehensive urban planning project demonstrating United Developers' strategic approach to sustainable city development.",
    features: ["Master Planning", "Smart City Design", "Green Infrastructure", "Mixed-Use Development"]
  },
  {
    id: "father-house",
    title: "Father's House",
    location: "Beijing, China",
    year: "2007",
    type: "Architecture" as const,
    image: residentialImage,
    area: "450 m²",
    status: "Award Winner" as const,
    description: "Intimate residential project exploring traditional Chinese spatial concepts through contemporary architectural language.",
    features: ["Residential Design", "Traditional Elements", "Modern Interpretation", "Spatial Innovation"]
  },
  {
    id: "ningbo-museum",
    title: "Ningbo Historic Museum",
    location: "Ningbo, China",
    year: "2016",
    type: "Architecture" as const,
    image: heroImage,
    area: "12,000 m²",
    status: "Completed" as const,
    description: "Museum design that reinterprets local architectural heritage while creating spaces for contemporary cultural expression.",
    features: ["Cultural Heritage", "Museum Design", "Historic Integration", "Contemporary Expression"]
  },
  {
    id: "xian-tv-broadcast-center",
    title: "Xi'an TV Broadcast Center",
    location: "Xi'an, China",
    year: "2009",
    type: "Architecture" as const,
    image: xianTvImage2,
    area: "81,117 m²",
    status: "Completed" as const,
    description: "This project inherits the generosity, concise and stately characteristics of Han Tang culture of Xi'an, integrated as a whole and enhances the scale perception. Diversified programs are enclosed by a symbolic wall, suggesting the Land Art temperament of Xi'an Wall while metaphorically representing a Media City.",
    features: ["Cultural Integration", "Media Center", "Exhibition Spaces", "Han Tang Architecture"]
  },
  {
    id: "corporate-identity",
    title: "United Developers Visual Identity System",
    location: "Shanghai, China",
    year: "2019",
    type: "Visual Design" as const,
    image: industrialImage,
    status: "Completed" as const,
    description: "Comprehensive visual identity system reflecting United Developers' architectural philosophy and international outlook.",
    features: ["Brand Identity", "Visual System", "International Appeal", "Architectural Integration"]
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "Urban Planning" | "Architecture" | "Interior Design" | "Visual Design">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "Completed" | "In Progress" | "Award Winner">("all");

  const filteredProjects = unitedDevelopersProjects.filter(project => {
    const typeMatch = filter === "all" || project.type === filter;
    const statusMatch = statusFilter === "all" || project.status === statusFilter;
    return typeMatch && statusMatch;
  });

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-muted-foreground">Type:</span>
            <div className="flex space-x-2 flex-wrap">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                data-testid="button-filter-all"
              >
                All
              </Button>
              <Button
                variant={filter === "Architecture" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("Architecture")}
                data-testid="button-filter-architecture"
              >
                Architecture
              </Button>
              <Button
                variant={filter === "Urban Planning" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("Urban Planning")}
                data-testid="button-filter-planning"
              >
                Urban Planning
              </Button>
              <Button
                variant={filter === "Interior Design" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("Interior Design")}
                data-testid="button-filter-interior"
              >
                Interior
              </Button>
              <Button
                variant={filter === "Visual Design" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("Visual Design")}
                data-testid="button-filter-visual"
              >
                Visual
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-muted-foreground">Status:</span>
            <div className="flex space-x-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
                data-testid="button-status-all"
              >
                All
              </Button>
              <Button
                variant={statusFilter === "Award Winner" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("Award Winner")}
                data-testid="button-status-awards"
              >
                Awards
              </Button>
              <Button
                variant={statusFilter === "Completed" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("Completed")}
                data-testid="button-status-completed"
              >
                Completed
              </Button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8">
          <p className="text-center text-muted-foreground">
            Showing <span className="font-semibold" data-testid="text-results-count">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found with the selected filters.
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
              Clear Filters
            </Button>
          </div>
        )}

        {/* Philosophy section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Our Design Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              "Design is the search for a path under collectively established goals. Architecture's purpose is to solve problems, 
              and an architect's work is problem-solving. However, this tradition has degenerated into an obsession with 
              problem-solving methods while forgetting the problems themselves. United Developers' effort is to reform this practice."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that a problem never appears twice in exactly the same way. Therefore, we never simply accept a problem; 
              instead, we discover, analyze, and define it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}