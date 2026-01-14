import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { CTABar } from "@/components/CTABar";

export default function Home() {
  return (
    <main className="relative z-10 w-full max-w-[500px] mx-auto bg-background-dark min-h-screen">
      <Navigation />
      <Hero />
      <VideoSection />
      <Features />
      <Pricing />
      <Footer />
      <CTABar />
    </main>
  );
}
