import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Marber Learning",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-cream flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Contact Us
          </h1>
          <p className="text-text-muted text-lg">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
