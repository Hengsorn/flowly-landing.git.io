import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import TrustedBy from "./sections/TrustedBy";
import Features from "./sections/Features";
import ProductShowcase from "./sections/ProductShowcase";
import HowItWorks from "./sections/HowItWorks";
import Integrations from "./sections/Integrations";
import Analytics from "./sections/Analytics";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <Integrations />
        <Analytics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
