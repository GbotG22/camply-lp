import Hero from "@/components/Hero";
import Screenshots from "@/components/Screenshots";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Screenshots />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
