import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Benefits } from "@/components/sections/Benefits";
import { CatalogVisibility } from "@/components/sections/CatalogVisibility";
import { Categories } from "@/components/sections/Categories";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Rewards } from "@/components/sections/Rewards";
import { Stats } from "@/components/sections/Stats";
import { Support } from "@/components/sections/Support";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Benefits />
        <CatalogVisibility />
        <Rewards />
        <Testimonials />
        <HowItWorks />
        <Categories />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
