import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import CompanyStats from "@/components/CompanyStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <PropertyGrid />
        <CompanyStats />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}