import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import CompanyStats from "@/components/CompanyStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <CompanyStats />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}