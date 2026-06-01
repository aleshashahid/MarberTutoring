import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata = {
  title: "Contact — Marber Learning",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactContent />
      <Footer />
    </>
  );
}
