import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesContent from "@/components/ServicesContent";

export const metadata = {
  title: "Tutoring Services — Marber Learning",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesContent />
      <Footer />
    </>
  );
}
