import Events from "@/components/events/eventsCard";
import Gallery from "@/components/home/Gallery";
import Workshop from "@/components/workshop/workshopCard";

export default function Home() {
  return (
    <>
      <Gallery />
      <Workshop/>
      <Events/>
    </>
  );
}
