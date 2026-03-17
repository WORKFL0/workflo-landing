import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContentBlock from "@/components/ContentBlock";
import FleetManagement from "@/components/FleetManagement";
import SecureInfrastructure from "@/components/SecureInfrastructure";
import PeaceOfMind from "@/components/PeaceOfMind";
import Support from "@/components/Support";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Nav />
      <Hero />
      <Services />
      <ContentBlock />
      <FleetManagement />
      <SecureInfrastructure />
      <PeaceOfMind />
      <Support />
      <Partners />
      <Footer />
    </main>
  );
}
