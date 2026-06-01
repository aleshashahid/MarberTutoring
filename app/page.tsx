import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SubjectsGrid from "@/components/SubjectsGrid";
import WhyMarber from "@/components/WhyMarber";
import CommunityOutreach from "@/components/CommunityOutreach";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <SubjectsGrid />
        <WhyMarber />
        <CommunityOutreach />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
