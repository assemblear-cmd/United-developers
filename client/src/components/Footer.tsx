import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin
} from "lucide-react";
import { Link } from "wouter";

export default function Footer() {

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "History", href: "/history" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
      { name: "Legal", href: "/legal" }
    ]
  };


  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
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
                  <span data-testid="footer-address"><p>Chile, Santiago</p></span>
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

          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024. All rights reserved.
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
