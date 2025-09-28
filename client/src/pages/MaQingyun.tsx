import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AwardItemProps {
  year: string;
  title: string;
  organization: string;
  description?: string;
}

function AwardItem({ year, title, organization, description }: AwardItemProps) {
  return (
    <div className="py-4 border-b border-border/50 last:border-b-0" data-testid={`award-item-${year}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-foreground" data-testid={`award-title-${year}`}>
          {title}
        </h3>
        <span className="text-sm text-muted-foreground ml-4" data-testid={`award-year-${year}`}>
          {year}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-1" data-testid={`award-organization-${year}`}>
        {organization}
      </p>
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`award-description-${year}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function MaQingyun() {
  const awards = [
    {
      year: "2023",
      title: "Community Planner",
      organization: "Shanghai Pudong New District",
      description: "Appointed as community planner for one of China's most important economic development zones."
    },
    {
      year: "2022", 
      title: "Chief Urban and Rural Planner",
      organization: "Shenzhen-Hong Kong Special Cooperation Zone",
      description: "Leading comprehensive urban development planning for this strategic cross-border economic zone."
    },
    {
      year: "2019",
      title: "World's Most Influential Designers",
      organization: "Business Week",
      description: "Selected as one of only three architects globally, alongside Rem Koolhaas and Zaha Hadid."
    },
    {
      year: "2018",
      title: "International Architecture Award",
      organization: "International Academy of Architecture",
      description: "Recognition for outstanding contribution to contemporary architectural practice and theory."
    },
    {
      year: "2015",
      title: "Excellence in Design Award",
      organization: "American Institute of Architects",
      description: "Honored for innovative architectural solutions that bridge Eastern and Western design philosophies."
    },
    {
      year: "2012",
      title: "Global Architecture Prize",
      organization: "World Architecture Festival",
      description: "Recognized for leadership in sustainable urban development and architectural innovation."
    },
    {
      year: "2010",
      title: "Distinguished Alumni Award",
      organization: "University of Pennsylvania",
      description: "Honored for exceptional achievements in architecture and urban planning."
    },
    {
      year: "2009",
      title: "Architectural Innovation Award",
      organization: "China Architecture Society",
      description: "Recognition for pioneering work in contemporary Chinese architecture."
    },
    {
      year: "2008",
      title: "Beijing Olympic Architecture Competition Winner",
      organization: "Beijing Olympic Committee",
      description: "Won competition for innovative sports facility design contributing to Beijing Olympics infrastructure."
    },
    {
      year: "2007",
      title: "Dean Appointment",
      organization: "University of Southern California School of Architecture",
      description: "Appointed as Dean, leading one of America's premier architecture programs."
    },
    {
      year: "2005",
      title: "International Design Excellence Award",
      organization: "Architectural Review",
      description: "Recognized for exceptional design quality and innovation in multiple architectural projects."
    },
    {
      year: "2003",
      title: "Young Architect Prize", 
      organization: "World Architecture Awards",
      description: "Early career recognition for promising contributions to architectural practice."
    },
    {
      year: "2002",
      title: "Design Excellence Citation",
      organization: "American Planning Association",
      description: "Honored for outstanding urban design and planning contributions."
    },
    {
      year: "2001",
      title: "Rising Star Award",
      organization: "Architectural Record",
      description: "Recognition as an emerging leader in contemporary architectural practice."
    },
    {
      year: "2000",
      title: "Innovation in Architecture Award",
      organization: "Progressive Architecture",
      description: "Early recognition for innovative design approaches and architectural vision."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ma Qingyun
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Founder and Principal Architect
              </p>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Biography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Ma Qingyun is one of the most influential architects of his generation, recognized 
                  globally for his innovative approach to contemporary architecture that bridges 
                  Eastern and Western design philosophies. His work spans multiple continents and 
                  scales, from intimate residential projects to comprehensive urban master plans.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Appointed as Dean of the School of Architecture at the University of Southern 
                  California in 2007, Ma has been instrumental in shaping architectural education 
                  and promoting cross-cultural dialogue in design. He opened the Los Angeles office 
                  to advance architectural practices and academic platforms across the Pacific Rim region.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ma has led major architectural projects across multiple Chinese cities including 
                  Beijing, Shanghai, Shenzhen, Hangzhou, Ningbo, Chengdu, Xi'an, and Tianjin. His 
                  work is characterized by a multi-disciplinary, multi-faceted approach that emphasizes 
                  architecture's role in social-cultural integration.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His architectural philosophy centers on the belief that architecture serves as a 
                  pathfinder for collectively defined goals, emphasizing problem discovery over 
                  problem-solving. This approach recognizes that no problem appears twice in exactly 
                  the same way, leading to unique solutions for each project.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Awards and Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-0">
                  {awards.map((award, index) => (
                    <AwardItem key={index} {...award} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Academic Leadership */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Academic and Professional Leadership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Current Positions</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Chief Urban and Rural Planner, Shenzhen-Hong Kong Special Cooperation Zone</li>
                      <li>• Community Planner, Shanghai Pudong New District</li>
                      <li>• Principal Architect, United Developers</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Past Leadership</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Dean, USC School of Architecture (2007-present)</li>
                      <li>• Director, Los Angeles Office Operations</li>
                      <li>• Visiting Professor, Multiple International Universities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}