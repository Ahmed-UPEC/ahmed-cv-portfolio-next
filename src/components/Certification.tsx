"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import pic from "../assets/photo.jpg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import encoder from "../assets/encoder.png";
import attention_mechanism from "../assets/attention_mechanism.png";
import image_generation from "../assets/image_generation.png";
import data_analytics from "../assets/data_analytics.png";
import tensorflow from "../assets/tensorflow.png";
import certification_data_visualization from "../assets/certification_data_visualization.jpg";
import certification_date_structures from "../assets/certification_date_structures.jpg";
import certification_frontend_lib from "../assets/certification_frontend_lib.jpg";
import certification_web_design from "../assets/certification_web_design.jpg";

export default function Certification() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[95%] xl:max-w-[1160px] mx-auto py-8">
        <div className="grid grid-cols-1 xl:grid-cols-10 gap-16">
          <div className="w-full col-span-8">
            <h1 className="text-4xl font-medium text-neutral-900 mb-10">
              My Certifications
            </h1>
            <div className="w-11/12 mx-auto lg:w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-10 gap-y-20">
            <GridElement
                imagePath={encoder.src}
                title="Encoder-Decoder Architecture"
                description=""
                tags={["GCP"]}
                link="https://www.cloudskillsboost.google/public_profiles/725ec711-d075-406f-a798-5b16d2273728/badges/6085803"
              />
              <GridElement
                imagePath={attention_mechanism.src}
                title="Attention Mechanism"
                description=""
                tags={["GCP"]}
                link="https://www.cloudskillsboost.google/public_profiles/725ec711-d075-406f-a798-5b16d2273728/badges/6085379"
              />
              <GridElement
                imagePath={image_generation.src}
                title="Introduction to Image Generation"
                description=""
                tags={["GCP"]}
                link="https://www.cloudskillsboost.google/public_profiles/725ec711-d075-406f-a798-5b16d2273728/badges/6085167"
              />

              <GridElement
                imagePath={data_analytics.src}
                title="Introduction to Data Analytics"
                description=""
                tags={["GCP"]}
                link="https://www.cloudskillsboost.google/public_profiles/725ec711-d075-406f-a798-5b16d2273728/badges/6051786"
              />
              <GridElement
                imagePath={tensorflow.src}
                title="Introduction to TensorFlow"
                description=""
                tags={["GCP"]}
                link="https://www.cloudskillsboost.google/public_profiles/725ec711-d075-406f-a798-5b16d2273728/badges/6084292"
              />
              <div className="hidden lg:block"></div>
              <GridElement
                imagePath={certification_data_visualization.src}
                title="Data Visualization"
                description=""
                tags={["FreeCodeCamp", "Data Visualization", "D3.js", "API"]}
                link="https://www.freecodecamp.org/certification/ahmed_syed/data-visualization"
              />
              <GridElement
                imagePath={certification_date_structures.src}
                title="Data Structures & Algorithms"
                description=""
                tags={["FreeCodeCamp", "Data Structures", "Algorithms"]}
                link="https://www.freecodecamp.org/certification/ahmed_syed/javascript-algorithms-and-data-structures"
              />
              <GridElement
                imagePath={certification_frontend_lib.src}
                title="Front End Development Libraries"
                description=""
                tags={["FreeCodeCamp", "Frontend Libraries", "ReactJS"]}
                link="https://www.freecodecamp.org/certification/ahmed_syed/front-end-development-libraries"
              />

              <GridElement
                imagePath={certification_web_design.src}
                title="Responsive Web Design"
                description=""
                tags={["FreeCodeCamp", "Responsive Web Design", "CSS", "HTML"]}
                link="https://www.freecodecamp.org/certification/ahmed_syed/responsive-web-design"
              />
            </div>
          </div>
          <div className="w-11/12 mx-auto lg:w-full col-span-8 xl:col-span-2 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <img
                src={pic.src}
                alt="ahmed's picture profil"
                className="max-w-[125px] xl:max-w-[100%] xl:mx-auto rounded-lg"
              />
              <p className="text-sm text-neutral-500/80">
                I’m Ahmed — a software engineer and photographer from the
                France.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="uppercase text-xs tracking-[0.15rem] font-semibold text-neutral-400">
                categories
              </p>
              <ul className="flex flex-col text-neutral-800 text-sm gap-1">
                <Link href="/projects">Projects</Link>
                <Link href="/certifications">Certifications</Link>
              </ul>
            </div>
          </div>
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
