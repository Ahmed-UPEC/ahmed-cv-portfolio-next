"use client";

import { useEffect, useState } from "react";

import { Icon } from "@iconify/react";

import pic from "../assets/photo.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      {/* main container */}
      <div className="max-w-[95%] md:max-w-[764px] mx-auto border-neutral-100 border px-8">
        {/* Title section */}
        <div className="flex flex-col gap-6 my-20 mb-16">
          <img
            src={pic.src}
            className="max-w-[125px] rounded-full border border-neutral-100 shadow-md"
          />
          <strong className="text-xl font-semibold text-neutral-800">
            I&apos;m Ahmed -- a coder and creator.
          </strong>
          <p className="text-slate-600 text-sm font-normal leading-6">
            I&apos;m a self-taught coder who got into programming during the
            pandemic. Eventually, I started picking up design and UI/UX to make
            my websites look and feel better. Along the way, I realized that{" "}
            <br />
            <span className="font-semibold underline underline-offset-2">
              Learning how to learn from internet
            </span>{" "}
            is such an awesome skill —it&apos;s honestly addictive.
            <br />
            <br />
            Now, I&apos;m diving into photography and filmmaking with the same
            approach. I&apos;m starting from scratch, figuring out the basics,
            and learning to use tools like DaVinci Resolve and Adobe to level up
            my work. It&apos;s all about the process, and I&apos;m loving it.
            <br />
            <br />
            <br />
            <small>
              Pssst, My dream camera setup is the Sony A7 V with a 28-200mm lens
              from Tamron.
            </small>
          </p>

          <div className="bg-transparent rounded-xl flex items-center gap-4 justify-between w-full">
            <a
              href="mailto:ahmedfrancilien@gmail.com"
              className="p-2 py-1 bg-black hover:bg-black/80 text-white rounded-md text-sm transition-all duration-150"
            >
              Reach out via email{" "}
              <Icon
                icon="ph:arrow-right-bold"
                className="inline text-lg pb-1 text-white align-middle"
              />
            </a>
            <small className="flex gap-2 text-green-500 items-center">
              <div className="flex relative justify-center items-center">
                <div className="w-3 h-3 rounded-3xl bg-green-400 animate-status-pulse absolute" />
                <div className="w-2 h-2 rounded-3xl bg-green-400" />
              </div>
              Available for work
            </small>
          </div>
        </div>

        {/* Experience section */}
        <div className="gap-6">
          <div className="absolute inset-x-0 flex flex-col gap-16 -mt-8">
            <hr className="border-neutral-100" />
            <hr className="border-neutral-100" />
          </div>
          <div className="flex flex-col gap-6 pt-12">
            <h5 className="font-semibold text-sm text-slate-500/60">
              Experience
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
              <GridElement
                title="CyberShen"
                description="Developing cyber security tools and services"
                link="https://cybershen.com/"
              />

              <GridElement
                title="LittleBigCode"
                description="Working on a web application to manage data oriented projects."
                link="https://littlebigcode.fr/"
              />

              <GridElement
                title="Thales Global Services"
                description="Development of automated CI/CD pipeline using java and selenium."
                link="https://www.thalesgroup.com/"
              />

              <GridElement
                title="Freelance"
                description="Working on simple client projects to enhance my coding skills."
                link=""
              />
            </div>
          </div>
        </div>

        {/* Education section */}
        <div className="my-20">
          <div className="absolute inset-x-0 flex flex-col gap-16 -mt-8">
            <hr className="border-neutral-100" />
            <hr className="border-neutral-100" />
          </div>
          <div className="flex flex-col gap-6 pt-12">
            <h5 className="font-semibold text-sm text-slate-500/60">
              Education
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
              <GridElement
                title="Biometrics & AI Master"
                description="<strong>International</strong> Master degree from UPEC (Paris,
                France) with a computer science specialisation."
                link="https://www.u-pec.fr/fr/formation/master-optique-image-vision-multimedia-parcours-international-biometrie-et-vision-intelligente-i-bvi"
              />

              <GridElement
                title="Mechanics Bachelor"
                description="Bachelor degree from UPEC (Paris, France) with a mechanics and
                engineering specialisation."
                link="https://www.u-pec.fr/fr/formation/niveau-l/licence-sciences-pour-l-ingenieur-parcours-sciences-pour-l-ingenieur"
              />

              <GridElement
                title="Self taught"
                description="Developement of computer science skills during pandemic,
                admission into master."
                link="https://www.freecodecamp.org/"
              />
            </div>
          </div>
        </div>

        {/* Project section */}
        <div className="">
          <div className="absolute inset-x-0 flex flex-col gap-16 -mt-8">
            <hr className="border-neutral-100" />
            <hr className="border-neutral-100" />
          </div>
          <div className="flex flex-col gap-6 pt-16">
            <h5 className="font-semibold text-sm text-slate-500/60">
              Projects
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
              <GridElement
                title="SupraLinx"
                description="Creating my own digital agency and creating content for brands from all over the world."
                link="https://supralinx.com"
              />

              <GridElement
                title="Virtual Assistant"
                description="A Web app for UPEC Biometric students with custom biometrics
                modalities integration. Powered by PHP SQL, Firebase & Python."
                link="https://ahmed-cv.web.app/projects/"
              />

              <GridElement
                title="Ahmed's Video Game CV"
                description="An online portfolio / CV with a retro video game design powered
                by ReactJS and React Router."
                link="https://ahmed-cv.web.app/projects/"
              />

              <GridElement
                title="Dune Brand name generator"
                description="A gpt prompt that generated brand names and compares the domain
                availability."
                link="https://dune-gpt.vercel.app/"
              />
            </div>
          </div>
        </div>

        {/* More section */}
        <div className="my-20">
          <div className="absolute inset-x-0 flex flex-col gap-16 -mt-8">
            <hr className="border-neutral-100" />
            <hr className="border-neutral-100" />
          </div>
          <div className="flex flex-col gap-6 pt-16">
            <h5 className="font-semibold text-sm text-slate-500/60">More..</h5>
            <div className="flex flex-col gap-[10px] text-sm font-normal text-neutral-600 items-start">
              <p>
                Are you looking for more information about me ? checkout my
                other projects and certifications{" "}
              </p>
              <Link
                href="/projects"
                className="bg-neutral-800 text-white px-2 py-1 rounded-[4px] font-semibold"
              >
                see more{" "}
                <Icon
                  icon="ph:arrow-right-bold"
                  className="inline text-lg pb-1 text-white align-middle"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Elsewhere section */}
        <div className="">
          <div className="absolute inset-x-0 flex flex-col gap-16 -mt-8">
            <hr className="border-neutral-100" />
            <hr className="border-neutral-100" />
          </div>
          <div className="flex flex-col gap-6 pt-16">
            <h5 className="font-semibold text-sm text-slate-500/60">
              Elsewhere
            </h5>
            <div className="flex-col flex sm:flex-row gap-6 pt-2">
              <a
                href="https://www.linkedin.com/in/ahmedsyed75"
                target="_blank"
                className="text-xs w-fit px-3 py-2 bg-neutral-100 border-solid rounded border-neutral-100 no-underline border-[1px] shadow-sm"
              >
                <Icon
                  icon="mdi:linkedin"
                  className="inline align-middle text-base"
                />{" "}
                &nbsp; ahmed
              </a>
              <a
                href="https://github.com/Ahmed-UPEC"
                target="_blank"
                className="text-xs w-fit px-3 py-2 bg-neutral-100 border-solid rounded border-neutral-100 no-underline border-[1px] shadow-sm"
              >
                <Icon
                  icon="mdi:github"
                  className="inline align-middle text-base"
                />{" "}
                &nbsp; ahmed-upec
              </a>
              <a
                href="https://www.instagram.com/asx.visuals/"
                target="_blank"
                className="text-xs w-fit px-3 py-2 bg-neutral-100 border-solid rounded border-neutral-100 no-underline border-[1px] shadow-sm"
              >
                <Icon
                  icon="mdi:instagram"
                  className="inline align-middle text-base"
                />{" "}
                &nbsp; asx.visuals
              </a>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="mt-20 mb-8">
          <div className="absolute inset-x-0 flex flex-col gap-16 -mt-8">
            <hr className="border-neutral-100" />
            <hr className="border-neutral-100" />
          </div>
          <div className="pt-16">
            <div className="max-w-[95%] md:max-w-[700px] mx-auto flex gap-2 items-center text-neutral-500 text-xs font-normal">
              <Icon icon="mdi:copyright" />
              <p>2025 Ahmed. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface GridElementProps {
  title: string;
  description: string;
  link: string;
}
function GridElement({ title, description, link }: GridElementProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Link
        href={link}
        target="_blank"
        className="text-neutral-900 text-base font-semibold no-underline leading-5"
      >
        {title}{" "}
        {link != "" ? (
          <Icon
            icon="gg:external"
            className="inline text-2xl align-top pb-1 text-neutral-400"
          />
        ) : (
          <></>
        )}
      </Link>
      <p
        className="text-sm font-normal text-neutral-600"
        dangerouslySetInnerHTML={{ __html: isClient ? description : "" }}
      ></p>
    </div>
  );
}
