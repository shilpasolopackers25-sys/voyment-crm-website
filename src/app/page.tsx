import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <div className="h-16 md:h-24 bg-[#F8FBFB]" aria-hidden="true" />
      <Features />
      <div className="h-16 md:h-24 bg-[#F8FBFB]" aria-hidden="true" />
      <Pricing />
      <div className="h-16 md:h-24 bg-[#F8FBFB]" aria-hidden="true" />
      <Testimonials />
      <div className="h-16 md:h-24 bg-[#F8FBFB]" aria-hidden="true" />
      <FAQ />
      <div className="h-16 md:h-24 bg-[#F8FBFB]" aria-hidden="true" />
      <Contact />
      <Footer />
    </main>
  );
}
