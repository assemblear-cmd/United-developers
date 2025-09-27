import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription");
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "History", href: "/history" },
      { name: "Awards", href: "/awards" }
    ],
    projects: [
      { name: "Architecture", href: "/portfolio" },
      { name: "Urban Planning", href: "/portfolio" },
      { name: "Interior Design", href: "/portfolio" },
      { name: "Visual Design", href: "/portfolio" }
    ],
    services: [
      { name: "Architectural Design", href: "/services" },
      { name: "Consultation", href: "/consulting" },
      { name: "Strategic Planning", href: "/planning" },
      { name: "Project Management", href: "/management" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
      { name: "Legal", href: "/legal" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">UD</span>
                </div>
                <span className="font-serif text-xl font-bold text-foreground">
                  United Developers
                </span>
              </div>
              
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span data-testid="footer-phone">+86 21 6466 0618</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span data-testid="footer-email">info@uniteddevelopers.com</span>
                </div>
                <div className="flex items-start space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span data-testid="footer-address">Shanghai, China</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} data-testid={`footer-link-company-${index}`}>
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Properties Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Projects</h3>
              <ul className="space-y-3">
                {footerLinks.projects.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} data-testid={`footer-link-projects-${index}`}>
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} data-testid={`footer-link-services-${index}`}>
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Receive news about new projects and architectural innovations.
              </p>
              
              <form onSubmit={handleNewsletter} className="space-y-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="text-sm"
                  data-testid="input-newsletter"
                />
                <Button type="submit" size="sm" className="w-full" data-testid="button-newsletter">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="font-medium text-foreground mb-3 text-sm">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="w-8 h-8"
                        data-testid={`button-social-${social.name.toLowerCase()}`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 United Developers. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link, index) => (
                <Link key={index} href={link.href} data-testid={`footer-legal-${index}`}>
                  <span className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}