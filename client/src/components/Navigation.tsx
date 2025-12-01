import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, ArrowLeft, Languages } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDarkBg, setIsOverDarkBg] = useState(false);
  const [location] = useLocation();
  const { t, i18n } = useTranslation();

  const isProjectPage = ["/casablanca", "/xixian", "/jinqiao", "/huyao", "/shenshan", "/xian-tv"].includes(location);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Detect if we're over a dark background (hero section is ~600-800px tall)
      // When scroll is near the top, we're over dark background - only for project pages
      if (isProjectPage) {
        setIsOverDarkBg(window.scrollY < 600);
      } else {
        setIsOverDarkBg(false);
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProjectPage]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const isDarkMode = theme === "dark";
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Set default theme to light if not already set
    if (!theme) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { href: "/", label: t('nav.home') },
    { href: "/portfolio", label: t('nav.projects') },
    { href: "/team", label: t('nav.team') },
    { href: "/contact", label: t('nav.contact') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled && isDark ? "bg-background/95 backdrop-blur-md border-b" : "bg-transparent backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Back Button */}
          {isProjectPage ? (
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 hover:text-primary"
              style={{
                color: isOverDarkBg ? 'white' : (isDark ? 'rgb(209, 213, 219)' : 'rgb(55, 65, 81)')
              }}
              data-testid="button-back-to-projects-nav"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span
                className="font-serif text-lg font-semibold"
                style={{
                  textShadow: isOverDarkBg ? "0 2px 4px rgba(0, 0, 0, 0.5)" : "none"
                }}
              >
                {t('nav.back')}
              </span>
            </Button>
          ) : (
            <Link href="/" data-testid="link-home">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">UD</span>
                </div>
                <span
                className="font-serif text-xl font-bold"
                style={{
                  color: isOverDarkBg ? 'white' : (isDark ? 'rgb(209, 213, 219)' : 'rgb(55, 65, 81)'),
                  textShadow: isOverDarkBg ? "0 2px 4px rgba(0, 0, 0, 0.5)" : "none"
                }}
              >
                United Developers
              </span>
              </div>
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <p>
                  <span
                  className={`text-sm font-medium transition-colors hover:text-primary`}
                  style={{
                    color: isOverDarkBg ? 'white' : (isDark ? 'rgb(209, 213, 219)' : 'rgb(55, 65, 81)'),
                    textShadow: isOverDarkBg ? "0 2px 4px rgba(0, 0, 0, 0.5)" : "none"
                  }}
                >
                  {item.label}
                </span>
                </p>
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
              title={i18n.language === 'en' ? 'Español' : 'English'}
            >
              <Languages className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div 
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent ${
                      location === item.href ? "text-primary bg-accent" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
