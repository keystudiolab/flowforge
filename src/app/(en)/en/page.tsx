import Navbar from "@/components/en/layout/Navbar";
import Hero from "@/components/en/Hero/Hero";
import About from "@/components/en/sections/About";
import Stats from "@/components/en/sections/Stats";
import Services from "@/components/en/sections/Services";
import DentalProduct from "@/components/en/sections/DentalProduct";
import WhyUs from "@/components/en/sections/WhyUs";
import Cases from "@/components/en/sections/Cases";
import Contact from "@/components/en/sections/Contact";
import Footer from "@/components/en/layout/Footer";

export default function EnglishHome() {
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