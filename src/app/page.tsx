
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <BentoGrid />
      <div className="h-[50vh] bg-transparent" />
    </main>
  );
}
