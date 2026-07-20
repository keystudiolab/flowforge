import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import Cases from "@/components/sections/Cases";
import Footer from "@/components/layout/Footer";
import Stats from "@/components/sections/Stats";
import DentalProduct from "@/components/sections/DentalProduct";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <DentalProduct />
        <WhyUs />
        <Cases />
        <Contact />
      </main>

      <Footer />
    </>
  );
}