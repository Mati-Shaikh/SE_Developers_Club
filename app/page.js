import Events from "@/components/home/eventsCard";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Workshop from "@/components/home/workshopCard";

import Login from "../components/auth/Login"

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <Hero />
      <Login></Login>
      <Gallery />
      <Workshop />
      <Events />
    </>
  );
}
