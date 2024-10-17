import Hero from "../components/Hero";
import ClubInfo from "../components/ClubInfo";
import Gallery from "@/components/home/Gallery";
import TeamsList from "@/components/TeamsList";

export default function Home() {
  return (
    <>
      <Hero />
      <ClubInfo />
      <Gallery />
      <TeamsList />
    </>
  );
}
