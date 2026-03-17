import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import FleetManagement from "@/components/FleetManagement";
import SecureInfrastructure from "@/components/SecureInfrastructure";
import PeaceOfMind from "@/components/PeaceOfMind";
import Support from "@/components/Support";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#080a0f" }}>
      <Nav />
      <Hero />
      <ServicesOverview />
      <FleetManagement />
      <SecureInfrastructure />
      <PeaceOfMind />
      <Support />
      <Footer />
    </main>
  );
}
