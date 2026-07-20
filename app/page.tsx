import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Pricing from "@/components/Pricing";
import SlotGrid from "@/components/SlotGrid";
import HowItWorks from "@/components/HowItWorks";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValueProps />
        <Pricing />
        <SlotGrid />
        <HowItWorks />
        <CtaBanner />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
