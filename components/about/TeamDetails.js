"use client";
import Image from "next/image";
import {
  decor,
  graphics,
  social_media_and_content,
  event_coverage_and_video_editing,
  events_planning,
  finance,
  operations,
  pr,
  marketing,
  information_and_coordination,
  workshops,
  research_and_development_randd,
} from "@/data";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function TeamDetails() {
  const pathname = usePathname();
  const [team, setTeam] = useState([]);
  const [teamName, setTeamName] = useState("");
  useEffect(() => {
    let path = pathname.split("/")[2];
    console.log(path);
    switch (path) {
      case "graphics":
        setTeam(graphics);
        setTeamName("Graphics");
        break;

      case "decor":
        setTeam(decor);
        setTeamName("Decor");
        break;

      case "social-media-and-content":
        setTeam(social_media_and_content);
        setTeamName("Social Media & Content");
        break;

      case "event-coverage-and-video-editing":
        setTeam(event_coverage_and_video_editing);
        setTeamName("Event Coverage & Video Editing");
        break;

      case "events-planning":
        setTeam(events_planning);
        setTeamName("Events Planning");
        break;

      case "finance":
        setTeam(finance);
        setTeamName("Finance");
        break;

      case "information-and-coordination":
        setTeam(information_and_coordination);
        setTeamName("Information & Coordination");
        break;

      case "workshops":
        setTeam(workshops);
        setTeamName("Workshops");
        break;

      case "pr":
        setTeam(pr);
        setTeamName("PR");
        break;

      case "marketing":
        setTeam(marketing);
        setTeamName("Marketing");
        break;

      case "research-and-development":
        setTeam(research_and_development_randd);
        setTeamName("Research & Development");
        break;

      case "operations":
        setTeam(operations);
        setTeamName("Operations");
        break;

      default:
        break;
    }
  }, [pathname]);

  return (
    <div className="bg-black text-white min-h-screen mt-10">
      {/* Container for the whole page */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Team R&D Header */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-left ml-4 md:ml-8">
            {teamName}
          </h2>
          <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed ml-4 md:ml-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* Meet Team Leads Section */}
        <section className="mb-12 md:mb-16">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-left ml-4 md:ml-8"
            style={{ color: "#6272A1" }}
          >
            Heads {teamName}
          </h2>
          <div className="flex flex-wrap gap-10 md:gap-40 justify-center p-10">
            {leads.map((member, index) => (
              <div
                key={index}
                className="flex flex-wrap justify-center gap-8 md:gap-32"
              >
                {/* Lead 1 */}
                <div className="flex flex-col items-center">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover mb-4"
                  />
                  <h3 className="text-lg md:text-3xl font-semibold text-gray-100 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 md:text-xl">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet RTeam Officers Section */}
        <section className="mb-12 md:mb-16">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-left ml-4 md:ml-8"
            style={{ color: "#6272A1" }}
          >
            Officers {teamName}
          </h2>
          <div className="flex flex-wrap gap-10 md:gap-40 justify-center p-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-wrap justify-center gap-8 md:gap-32"
              >
                {/* Lead 1 */}
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={142}
                    height={142}
                    className="object-cover mb-4 h-40 w-40 drop-shadow-custom"
                  />
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-100 mb-2">
                    {member.name}
                  </h3>
                  <div className="flex flex-row gap-5 items-center">
                    <p className="text-blue-400 md:text-xl capitalize">
                      {member.rank}
                    </p>
                    <Link href={member.linkedin} target="_blank">
                      <img src="/icons8-linkedin.svg" className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const members = [
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "VP Internals",
  },
];

const leads = [
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "Head Workshops",
  },
  {
    img: "/About/President.png",
    name: "Ibraheem Kayani",
    role: "Head Research & Development",
  },
];
