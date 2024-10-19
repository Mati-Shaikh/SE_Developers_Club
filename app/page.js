import Events from "@/components/home/eventsCard";
import Gallery from "@/components/home/Gallery";
import Workshop from "@/components/home/workshopCard";

export default function Home() {
  return (
    <>
      <Gallery />
      <Workshop />
      <Events />
    </>
  );
}
