import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent flex flex-col overflow-hidden">
      <Nav />
      {/* Hero acts as the main content wrapper (Grid + Sidebar + Trust Bar) */}
      <div className="flex-grow flex flex-col pt-24 pb-8">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
