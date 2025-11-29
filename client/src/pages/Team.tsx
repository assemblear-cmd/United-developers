import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";
import { Link } from "wouter";
import executiveImage from "@assets/IMG_20250926_233927_1758940891271.jpg";
import sergeiImage from "@assets/IMG_20250927_190540_361_1759012338591.jpg";
import artemImage from "@assets/Screenshot_2025-09-27-22-37-30-363_com.instagram.android-edit_1759023474746.jpg";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Team
            </h1>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-8 lg:p-12">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-serif text-3xl font-bold text-foreground mb-2" data-testid="text-ma-name">
                          Ma Qingyun
                        </h3>
                      </div>


                      <div className="pt-4">
                        <ul className="space-y-3 text-sm text-muted-foreground">
                          <li>
                            <p>
                              �� <p>
                                <div style={{ display: "inline", fontWeight: "400" }}>
                                  ��{" "}
                                </div>
                                China's most influential architect, according to the
                              </p>
                              <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="http://ft.com/content/82412506-3cf8-11df-bbcf-00144feabdc0"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <p><u>Financial Times</u></p>
                              </a>
                            </p>
                          </li>
                          <li>
                            <p>
                              <p>
                                <div style={{ display: "inline", fontWeight: "400" }}>
                                  •
                                </div>
                                <u>Appointed</u>
                                &nbsp;as Dean of the School of Architecture at the University of Southern California in 2007
                              </p>
                            </p>
                          </li>
                          <li>
                            <p>
                              <div style={{ display: "inline", fontWeight: "400" }}>
                                •{" "}
                              </div>
                              Led urban planning projects in Beijing, Shanghai, Shenzhen, Hangzhou, Ningbo, Chengdu, Xi'an and Tianjin
                            </p>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Link href="/ma-qingyun">
                          <Button variant="outline" data-testid="button-ma-read-more">
                            Read More
                          </Button>
                        </Link>
                      </div>

                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Artem Golestian Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative aspect-square">
                    <img
                      src={artemImage}
                      alt="Artem Golestian"
                      className="w-full h-full object-cover"
                      data-testid="img-artem-portrait"
                    />
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 lg:p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-serif text-3xl font-bold text-foreground mb-2" data-testid="text-artem-name">
                          Artem Golestian
                        </h3>
                        <p className="text-muted-foreground mb-3" data-testid="text-artem-role">
                          Architect
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Partner
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Diego Baloian Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative aspect-square">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F8cfd01bb95f84f8cb3a6ba36f2051ec6%2F80804d17aa734b21ad197be78d43330d?format=webp&width=800"
                      alt="Diego Baloian"
                      className="w-full h-full object-cover"
                      data-testid="img-diego-portrait"
                    />
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 lg:p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-serif text-3xl font-bold text-foreground mb-2" data-testid="text-diego-name">
                          Diego Baloian
                        </h3>
                        <p className="text-muted-foreground mb-3" data-testid="text-diego-role">
                          Architect
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Partner
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Sergei Stepanov Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative aspect-square">
                    <img
                      src={sergeiImage}
                      alt="Sergei Stepanov"
                      className="w-full h-full object-cover"
                      data-testid="img-sergei-portrait"
                    />
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 lg:p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-serif text-3xl font-bold text-foreground mb-2" data-testid="text-sergei-name">
                          Sergei Stepanov
                        </h3>
                        <p className="text-muted-foreground mb-3" data-testid="text-sergei-role">
                          System Architect
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Partner
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
