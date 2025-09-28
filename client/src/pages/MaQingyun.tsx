import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Globe, Trophy, Star, Building, MapPin, User, GraduationCap } from "lucide-react";

interface AwardItemProps {
  year: string;
  title: string;
  organization: string;
  description?: string;
  category: "international" | "academic" | "industry" | "olympic";
}

function AwardItem({ year, title, organization, description, category }: AwardItemProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "international": return Globe;
      case "academic": return Building;
      case "industry": return Trophy;
      case "olympic": return Star;
      default: return Award;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "international": return "bg-blue-500/10 text-blue-700 dark:text-blue-300";
      case "academic": return "bg-purple-500/10 text-purple-700 dark:text-purple-300";
      case "industry": return "bg-green-500/10 text-green-700 dark:text-green-300";
      case "olympic": return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300";
      default: return "bg-primary/10 text-primary";
    }
  };

  const CategoryIcon = getCategoryIcon(category);

  return (
    <div className="flex items-start space-x-4 p-6 border-l-4 border-primary/20 hover-elevate transition-all duration-300" data-testid={`award-item-${year}`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getCategoryColor(category)}`}>
        <CategoryIcon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-2">
          <Badge variant="outline" className="text-xs" data-testid={`award-year-${year}`}>
            {year}
          </Badge>
          <Badge variant="secondary" className="text-xs capitalize" data-testid={`award-category-${category}`}>
            {category.replace('-', ' ')}
          </Badge>
        </div>
        <h3 className="font-serif text-lg font-semibold text-foreground mb-1" data-testid={`award-title-${year}`}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2" data-testid={`award-organization-${year}`}>
          {organization}
        </p>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`award-description-${year}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function MaQingyun() {
  const awards = [
    {
      year: "2023",
      title: "Community Planner",
      organization: "Shanghai Pudong New District",
      description: "Appointed as community planner for one of China's most important economic development zones.",
      category: "academic" as const
    },
    {
      year: "2022",
      title: "Chief Urban and Rural Planner",
      organization: "Shenzhen Shenshan Special Cooperation Zone",
      description: "Leading the development of pioneering urban paradigms that balance countryside preservation, ecological sustainability, and industry innovation.",
      category: "academic" as const
    },
    {
      year: "2018",
      title: "Most Influential Western Merchants",
      organization: "Second World West Merchants Conference, Shaanxi",
      description: "Recognition for significant contributions to economic and cultural development in Western China.",
      category: "industry" as const
    },
    {
      year: "2015",
      title: "Top 30 Most Influential Designers in China",
      organization: "Forbes China",
      description: "Selected as one of only 7 most influential architecture designers in China, recognizing leadership in contemporary design discourse.",
      category: "international" as const
    },
    {
      year: "2010",
      title: "World's Most Influential Designers",
      organization: "Business Week, USA",
      description: "Named one of the world's most influential designers, becoming one of only three architects to receive this honor alongside Rem Koolhaas and Zaha Hadid.",
      category: "international" as const
    },
    {
      year: "2010",
      title: "Shanghai World Expo Awards Committee Member",
      organization: "International Exhibition Bureau",
      description: "Invited as member of the Awards Committee of Official Exhibitors for the 2010 Shanghai World Expo.",
      category: "olympic" as const
    },
    {
      year: "2010",
      title: "Shanghai World Expo Sculpture Selection",
      organization: "Shanghai World Expo",
      description: "Sculpture work 'Sack' selected for the China Shanghai World Expo riverside landscape sculpture project.",
      category: "olympic" as const
    },
    {
      year: "2008",
      title: "Olympics Village Presentation Expert",
      organization: "Beijing Olympics Organizing Committee",
      description: "Served as expert in bid presentation for the 2008 Beijing Olympics, contributing to architectural planning and evaluation.",
      category: "olympic" as const
    },
    {
      year: "2007",
      title: "Creative Industry Leader",
      organization: "Shanghai Municipality",
      description: "Recognized as a leading figure in Shanghai's creative industries for architectural innovation.",
      category: "industry" as const
    },
    {
      year: "2006",
      title: "Person of the Year",
      organization: "Architecture Times, Shanghai",
      description: "Annual recognition for outstanding contributions to architectural discourse and practice.",
      category: "industry" as const
    },
    {
      year: "2004",
      title: "China New Mainland Designer",
      organization: "China New Mainland Residential Design Competition",
      description: "Honored as a leading figure in China's new generation of residential design innovators.",
      category: "industry" as const
    },
    {
      year: "2004",
      title: "100 Pioneers in Creative Fields Golden Award",
      organization: "China International Trade Organization and Research Institute",
      description: "Prestigious recognition with personal inscription by Chinese leadership for innovation in creative industries.",
      category: "industry" as const
    }
  ];

  const categoryStats = {
    international: awards.filter(a => a.category === "international").length,
    academic: awards.filter(a => a.category === "academic").length,
    industry: awards.filter(a => a.category === "industry").length,
    olympic: awards.filter(a => a.category === "olympic").length
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ma Qingyun
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Founder & Design Principal, MADA s.p.a.m.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            International architect, educator, and urban planner bridging Eastern and Western 
            architectural philosophies through innovative design and academic leadership.
          </p>
        </div>

        {/* Biography Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl flex items-center">
                <User className="h-6 w-6 mr-2" />
                Biography
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Born in Xi'an, China in 1965, Ma Qingyun earned his Bachelor of Architecture 
                from Tsinghua University and Master of Architecture from the University of Pennsylvania. 
                In 1996, he founded MADA s.p.a.m. in New York, later relocating it to Shanghai in 1999.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the past two decades, he has led his design and research team in exploring 
                China's contemporary design discourse and expanding its creative practice, making 
                MADA s.p.a.m. one of the most internationally recognized architectural practices in China.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ma Qingyun's work emphasizes multi-disciplinary, multi-faceted and multi-layered 
                engagement with architecture and the social and human conditions in which it is embedded.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl flex items-center">
                <GraduationCap className="h-6 w-6 mr-2" />
                Academic Leadership
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Dean, USC School of Architecture</p>
                    <p className="text-sm text-muted-foreground">2007-2015 | University of Southern California</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      First Chinese dean at a major US architecture school. Achieved historic rankings: 
                      undergraduate #5, graduate #15, with fastest-growing graduate program in North America.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Chief Urban and Rural Planner</p>
                    <p className="text-sm text-muted-foreground">2022-Present | Shenzhen Shenshan Special Cooperation Zone</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Pioneering new urban development paradigms that balance countryside preservation, 
                      ecological sustainability, and industry innovation.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Positions */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-center">Current Positions & Affiliations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">MADA s.p.a.m.</h4>
                <p className="text-sm text-muted-foreground">Founder & Design Principal</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Shenzhen Planning Commission</h4>
                <p className="text-sm text-muted-foreground">Member</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">USC Architecture</h4>
                <p className="text-sm text-muted-foreground">Former Dean & Honorary Chair</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Awards Statistics */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over two decades of international recognition for architectural excellence, 
            innovation in urban planning, and leadership in design education.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover-elevate transition-all duration-300" data-testid="stats-international">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{categoryStats.international}</div>
              <div className="text-sm text-muted-foreground">International Awards</div>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate transition-all duration-300" data-testid="stats-academic">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{categoryStats.academic}</div>
              <div className="text-sm text-muted-foreground">Academic Appointments</div>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate transition-all duration-300" data-testid="stats-industry">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{categoryStats.industry}</div>
              <div className="text-sm text-muted-foreground">Industry Recognition</div>
            </CardContent>
          </Card>

          <Card className="text-center hover-elevate transition-all duration-300" data-testid="stats-olympic">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{categoryStats.olympic}</div>
              <div className="text-sm text-muted-foreground">Olympic & Expo</div>
            </CardContent>
          </Card>
        </div>

        {/* Awards Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-center">Recognition Timeline</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              {awards.map((award, index) => (
                <AwardItem
                  key={index}
                  year={award.year}
                  title={award.title}
                  organization={award.organization}
                  description={award.description}
                  category={award.category}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Distinguished Recognition Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    Distinguished Global Recognition
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ma Qingyun's selection as one of Business Week's "World's Most Influential Designers" 
                    places him among an elite group of only three architects globally, alongside 
                    Rem Koolhaas and Zaha Hadid. This recognition reflects his pioneering work in 
                    bridging Eastern and Western architectural philosophies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    His academic leadership as Dean of USC School of Architecture and current role 
                    as Chief Urban and Rural Planner for Shenzhen's Special Cooperation Zone demonstrates 
                    his commitment to advancing both architectural education and sustainable urban development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}