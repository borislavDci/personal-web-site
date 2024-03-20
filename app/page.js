import Divider from "@/components/Divider";
import Grid from "@/components/Skills";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <HeroSection />
      <Divider />
      <Grid />
      <Divider />
      <Projects />
      <div className="text-center">
        <a href="#" className="text-white">
          Back to top
        </a>
      </div>
      <Divider />
    </main>
  );
}
