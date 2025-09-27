import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Award, Calendar, Building, GraduationCap, Mail, Linkedin } from "lucide-react";
import executiveImage from "@assets/generated_images/Company_executive_portrait_41e926ea.png";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders and talented professionals who drive United Developers' 
              innovative approach to architecture and design.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Founder & Principal
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative">
                    <img 
                      src={executiveImage}
                      alt="Ma Qingyun"
                      className="w-full h-full object-cover min-h-[400px]"
                      data-testid="img-ma-portrait"
                    />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-black/70 text-white border-none">
                        Founder & Principal
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-8 lg:p-12">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-serif text-3xl font-bold text-foreground mb-2" data-testid="text-ma-name">
                          Ma Qingyun
                        </h3>
                        <p className="text-lg text-primary font-medium" data-testid="text-ma-title">
                          Founding Principal, United Developers
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Calendar className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Founded United Developers</p>
                            <p className="text-sm text-muted-foreground">1999, Shanghai</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Dean, USC School of Architecture</p>
                            <p className="text-sm text-muted-foreground">2007-2017, University of Southern California</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Global Practice</p>
                            <p className="text-sm text-muted-foreground">Shanghai, Los Angeles, Beijing</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Award className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Award Recognition</p>
                            <p className="text-sm text-muted-foreground">Multiple architecture awards and exhibitions</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <h4 className="font-semibold text-foreground mb-3">About Ma Qingyun</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          Ma Qingyun is the founding principal of United Developers, established in Shanghai in 1999. 
                          With an international perspective shaped by his multicultural team, Ma has led the firm 
                          to bridge Eastern and Western design philosophies through innovative architectural practice.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          As former Dean of the USC School of Architecture (2007-2017), Ma brought academic rigor 
                          to United Developers' practice while expanding the firm's influence across the Pacific Rim. His 
                          leadership philosophy emphasizes collective problem-solving and cultural synthesis.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Under his guidance, United Developers has developed a unique approach that views clients as collaborators 
                          in discovering and redefining architectural challenges, rather than simply solving predetermined problems.
                        </p>
                      </div>

                      <div className="flex space-x-3 pt-4">
                        <Button variant="outline" size="sm" data-testid="button-ma-contact">
                          <Mail className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                        <Button variant="outline" size="sm" data-testid="button-ma-linkedin">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>


        {/* Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Our Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive services span multiple disciplines, reflecting our holistic approach to design and development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Urban Planning</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive master planning and strategic urban development</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Architecture</h3>
                  <p className="text-sm text-muted-foreground">Innovative architectural design bridging cultures and contexts</p>
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