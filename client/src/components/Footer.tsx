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
      { name: "Sobre Nosotros", href: "/about" },
      { name: "Nuestro Equipo", href: "/team" },
      { name: "Historia", href: "/history" },
      { name: "Premios", href: "/awards" }
    ],
    properties: [
      { name: "Villas de Lujo", href: "/villas" },
      { name: "Proyectos Industriales", href: "/industrial" },
      { name: "En Construcción", href: "/construction" },
      { name: "Vendidas", href: "/sold" }
    ],
    services: [
      { name: "Desarrollo Inmobiliario", href: "/development" },
      { name: "Consultoría", href: "/consulting" },
      { name: "Inversión", href: "/investment" },
      { name: "Administración", href: "/management" }
    ],
    legal: [
      { name: "Política de Privacidad", href: "/privacy" },
      { name: "Términos de Servicio", href: "/terms" },
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
                  <span className="text-primary-foreground font-bold text-sm">VL</span>
                </div>
                <span className="font-serif text-xl font-bold text-foreground">
                  Villas de Lujo
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Desarrollamos propiedades excepcionales en Chile, combinando diseño arquitectónico de vanguardia con la belleza natural del país para crear espacios únicos de lujo y funcionalidad.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span data-testid="footer-phone">+56 2 2234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span data-testid="footer-email">contacto@villasdelujo.cl</span>
                </div>
                <div className="flex items-start space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span data-testid="footer-address">Av. Providencia 1234, Providencia, Santiago</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
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
              <h3 className="font-semibold text-foreground mb-4">Propiedades</h3>
              <ul className="space-y-3">
                {footerLinks.properties.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} data-testid={`footer-link-properties-${index}`}>
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
              <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
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
                Recibe noticias sobre nuevas propiedades y proyectos exclusivos.
              </p>
              
              <form onSubmit={handleNewsletter} className="space-y-3">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="text-sm"
                  data-testid="input-newsletter"
                />
                <Button type="submit" size="sm" className="w-full" data-testid="button-newsletter">
                  Suscribirse
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="font-medium text-foreground mb-3 text-sm">Síguenos</h4>
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
              © 2024 Villas de Lujo Chile. Todos los derechos reservados.
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