import Events from "@/components/home/eventsCard";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Workshop from "@/components/home/workshopCard";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Workshop />
      <Events />
    </>
  );
}
