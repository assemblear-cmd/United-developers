import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Square, ArrowRight, Building, Home } from "lucide-react";
import { useLocation } from "wouter";
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
import xixianCbdImage from "@assets/IMG_20250926_225621_1759008587265.jpg";
import jinqiaoGuopeiImage from "@assets/Screenshot_2025-09-27-15-36-36-976_cn.wps.xiaomi.abroad.lite-edit_1759009184273.jpg";
import huyaoOfficeImage from "@assets/Screenshot_2025-09-27-18-45-22-455_cn.wps.xiaomi.abroad.lite-edit_1759009642993.jpg";
import shenshanZoneImage from "@assets/Screenshot_2025-09-27-18-49-24-999_cn.wps.xiaomi.abroad.lite-edit_1759009870282.jpg";
import casablancaImage from "@assets/IMG-20250918-WA0002_1759023615741.jpg";

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  year: string;
  type: "Urban Planning" | "Commercial";
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
  const [, setLocation] = useLocation();
  
  const handleViewDetails = () => {
    if (id === "casablanca-planning") {
      setLocation("/casablanca");
    } else if (id === "xixian-cbd") {
      setLocation("/xixian");
    } else {
      console.log(`Viewing details for project ${id}`);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Urban Planning": return Building;
      case "Commercial": return Home;
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
    id: "casablanca-planning",
    title: "Casablanca Valley",
    location: "Casablanca Valley, Morocco",
    year: "2024",
    type: "Urban Planning" as const,
    image: casablancaImage,
    area: "500 hectares",
    status: "Award Winner" as const,
    description: "A visionary development where contemporary architecture meets centuries-old viticultural traditions. Elevated pavilions punctuate vineyard rows while the village core weaves contemporary sensibilities through traditional morphology.",
    features: ["Vineyard Urbanism", "Agricultural Integration", "Contemporary Architecture", "Cultural Continuity"]
  },
  {
    id: "xixian-cbd",
    title: "Xixian CBD",
    location: "Xi'an, China",
    year: "2013",
    type: "Urban Planning" as const,
    image: xixianCbdImage,
    area: "3.82 million m²",
    status: "Completed" as const,
    description: "Comprehensive master plan for sustainable urban development that balances conservation with modern urbanization. The design preserves 47% farmland and 5% wetlands while creating efficient urban districts connected by innovative green infrastructure including a signature 'Green Bridge' over existing rail lines.",
    features: ["Master Planning", "Sustainable Development", "Green Infrastructure", "Mixed-Use Districts"]
  },
  {
    id: "jinqiao-guopei-1851",
    title: "Jinqiao Guopei 1851",
    location: "Shanghai, China",
    year: "2019",
    type: "Commercial" as const,
    image: jinqiaoGuopeiImage,
    area: "140,000 m²",
    status: "Completed" as const,
    description: "Mixed-use commercial complex that maximizes land, public, and commercial resources. The design creates a visual symbol of an international metropolis through high-complexity function configuration and multi-dimensional spatial interleaving. Features integration with elevated infrastructure and Jiangnan garden elements.",
    features: ["Mixed-Use Commercial", "Urban Integration", "Elevated Infrastructure", "Cultural Landscape"]
  },
  {
    id: "huyao-office-building",
    title: "Huyao Office Building",
    location: "Shanghai, China",
    year: "2021",
    type: "Commercial" as const,
    image: huyaoOfficeImage,
    area: "Not specified",
    status: "Completed" as const,
    description: "Combines functionality, economy and artistry with rational and harmonious layout concepts to meet sustainable development requirements. Features integration of 'integrity, integration, openness' characteristics with compound functions and shared facilities. Design based on unit office settlements, outdoor platforms, roof gardens and central garden corridors, forming an enclosed building integrated with surrounding environment.",
    features: ["Sustainable Design", "Functional Integration", "Garden Integration", "Environmental Harmony"]
  },
  {
    id: "shenshan-central-area",
    title: "Shenzhen-Shantou Special Cooperation Zone Central Area Planning",
    location: "Shenzhen, China",
    year: "2022",
    type: "Urban Planning" as const,
    image: shenshanZoneImage,
    area: "Central Area",
    status: "In Progress" as const,
    description: "Pioneering new urban development paradigms that balance countryside preservation, ecological sustainability, and industry innovation. As chief urban and rural planner, the project aims to create a new urban development model that protects pastoral areas, maintains ecology, and promotes cross-industry innovation through integrated design approaches.",
    features: ["Urban Planning", "Ecological Sustainability", "Rural-Urban Integration", "Cross-Industry Innovation"]
  },
  {
    id: "xian-tv-broadcast-center",
    title: "Xi'an TV Broadcast Center",
    location: "Xi'an, China",
    year: "2009",
    type: "Commercial" as const,
    image: xianTvImage2,
    area: "81,117 m²",
    status: "Completed" as const,
    description: "This project inherits the generosity, concise and stately characteristics of Han Tang culture of Xi'an, integrated as a whole and enhances the scale perception. Diversified programs are enclosed by a symbolic wall, suggesting the Land Art temperament of Xi'an Wall while metaphorically representing a Media City.",
    features: ["Cultural Integration", "Media Center", "Exhibition Spaces", "Han Tang Architecture"]
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "Urban Planning" | "Commercial">("all");
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
            Our Projects
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
                variant={filter === "Commercial" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("Commercial")}
                data-testid="button-filter-commercial"
              >
                Commercial
              </Button>
              <Button
                variant={filter === "Urban Planning" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("Urban Planning")}
                data-testid="button-filter-planning"
              >
                Urban Planning
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
                Completed
              </Button>
              <Button
                variant={statusFilter === "In Progress" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("In Progress")}
                data-testid="button-status-in-progress"
              >
                In progress
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

      </div>
    </section>
  );
}
