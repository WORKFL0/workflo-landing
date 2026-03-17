import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FleetManagement from "@/components/FleetManagement";
import SecureInfrastructure from "@/components/SecureInfrastructure";
import PeaceOfMind from "@/components/PeaceOfMind";
import Support from "@/components/Support";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Nav />
      <Hero />
      <FleetManagement />
      <SecureInfrastructure />
      <PeaceOfMind />
      <Support />
      <Partners />
      <Footer />
    </main>
  );
}
