"use client";

import Navbar from "./Navbar";
import pic from "../assets/photo.jpg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import aerospace from "../assets/aerospace.png";
import arcade from "../assets/arcade.png";
import netflix from "../assets/netflix.png";
import instantRepair from "../assets/instantRepair.png";
import covid19Spy from "../assets/covid19-spy.png";
import virtualAssistant from "../assets/virtual_assistant.png";
import supralinx from "../assets/supralinx.png";
import cybershen from "../assets/cybershen.png";
import graalsystems from "../assets/graal.png";
import ma321 from "../assets/ma321.png";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Project() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[95%] xl:max-w-[1160px] mx-auto py-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
          <div className="w-full col-span-9 ">
            <h1 className="text-4xl font-medium text-neutral-900 mb-10">
              My Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-10 gap-y-20">
              <GridElement
                imagePath={supralinx.src}
                title="SupaLinx"
                description="Creating my own digital agency and creating content for brands from all over the world."
                tags={["Design", "Creation", "Web", "Branding"]}
                link="https://supralinx.com/"
              />

              <GridElement
                imagePath={cybershen.src}
                title="CyberShen"
                description="Developing cyber security tools and services."
                tags={["NextJS", "Cyber", "Branding"]}
                link="https://supralinx.com/"
              />

              <GridElement
                imagePath={graalsystems.src}
                title="GraalSystems"
                description="Working on a web application to manage data oriented projects."
                tags={["NextJS", "Vercel", "Data", "Branding"]}
                link="https://graal-systems.vercel.app"
              />
              <GridElement
                imagePath={virtualAssistant.src}
                title="Virtual Assistant"
                description="A Web app for UPEC Biometric students with custom biometrics modalities integration. Powered by PHP SQL, Firebase & Python"
                tags={["Php", "Python", "Firebase", "GCP"]}
                link="https://myvirtualassistant.fr/"
              />
              <GridElement
                imagePath={arcade.src}
                title="Ahmed's Video Game CV"
                description="An online portfolio / CV with a retro video game design powered by ReactJS and React Router"
                tags={["Firebase", "ReactJS"]}
                link="https://ahmed-arcade.web.app/"
              />
              <GridElement
                imagePath={aerospace.src}
                title="Ahmed's Aerospace CV"
                description="Aerospace Theme CV to practice my CSS skills. Contains a 3D model using Google's model viewer tool"
                tags={[]}
                link="https://aerospace-ahmed.web.app/"
              />

              <GridElement
                imagePath={netflix.src}
                title="Netflix Copy"
                description="Netflix copy, still some errors to solve powered by ReactJS and Redux API"
                tags={["Firebase", "ReactJS", "API", "Redux"]}
                link="https://netflix-clone-ahmed.web.app/"
              />
              <GridElement
                imagePath={instantRepair.src}
                title="Instat Repair"
                description="Phone Repair shop, powered by ReactJS & React Context API and Google Firebase Auth & Firestore"
                tags={["Firebase", "ReactJS", "API", "ThreeJS"]}
                link="https://instantrepair-phone.web.app/"
              />
              <GridElement
                imagePath={ma321.src}
                title="Math Project Ma321"
                description="Using a website to present a math project instead of a Powerpoint Presentation Live Example"
                tags={["Firebase"]}
                link="https://bdebletzackair.web.app/"
              />
              <GridElement
                imagePath={covid19Spy.src}
                title="Covid 19 Tracker"
                description="Covid 19 Tracker with real-time data fetching API powered by ReactJS and Data Visualization"
                tags={["ReactJS", "API", "Firebase"]}
                link="https://covid19-spy.web.app/"
              />
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

interface GridElementProps {
  imagePath: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
}
function GridElement({
  imagePath,
  title,
  description,
  link,
  tags,
}: GridElementProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Link
        href={link}
        target="_blank"
        className="text-neutral-900 text-base font-semibold no-underline leading-5 flex flex-col gap-4"
      >
        <img
          src={imagePath}
          alt="grid element image"
          className="w-full rounded-md border-[1px] border-neutral-200 transition-all duration-150 hover:shadow-lg"
        />
        <div className="hover:text-blue-500 transition-all duration-150">
          {title}{" "}
          {link != "" ? (
            <Icon
              icon="ph:arrow-right-bold"
              className="inline text-2xl align-top pb-1"
            />
          ) : (
            <></>
          )}
        </div>
      </Link>
      <p
        className="text-sm font-normal text-neutral-600"
        dangerouslySetInnerHTML={{ __html: isClient ? description : "" }}
      ></p>
      {tags ? (
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="mt-4 uppercase text-[11px] font-semibold text-neutral-400 bg-neutral-50 rounded-md px-2 py-1 border-neutral-200 border-[1px]"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
