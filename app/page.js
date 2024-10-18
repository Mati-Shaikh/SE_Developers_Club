import Events from "@/components/home/events/eventsCard";
import Gallery from "@/components/home/Gallery";
import Workshop from "@/components/home/workshop/workshopCard";

export default function Home() {
  return (
    <>
      <Gallery />
      <Workshop/>
      <Events/>
    </>
  );
}
