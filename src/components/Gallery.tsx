"use client";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import arc_triomphe from "../assets/gallery/IMG_9123.jpg";
import building from "../assets/gallery/IMG_9124.jpg";
import restaurant from "../assets/gallery/IMG_9129.jpg";
import gorilla from "../assets/gallery/IMG_9223-Edit.jpg";
import museum from "../assets/gallery/IMG_9224-Edit.jpg";
import falcon from "../assets/gallery/IMG_9219-Edit.jpg";
import polar from "../assets/gallery/IMG_9236-Edit.jpg";
import view from "../assets/gallery/APC_0003.jpg";
import { useState } from "react";

export default function Gallery() {
  return (
    <div className="relative">
      <Navbar />
      <div className="max-w-[95%] xl:max-w-[1160px] mx-auto py-8">
        <div className="grid grid-cols-1 xl:grid-cols-10 gap-16">
          <div className="w-full col-span-8">
            <h1 className="text-4xl font-medium text-neutral-900 mb-10">
              My Gallery
            </h1>
            <p className="w-11/12 mx-auto lg:w-full text-neutral-500 text-sm font-normal mb-12">
              I love to shoot with my Iphone 15 pro camera and edit the pictures
              using adobe and specially Lightroom and Photoshop. I am looking
              forward to upgrade my setup and switch to a proper Sony mirorless
              camera the A7C mark II.
            </p>
            <p className="w-11/12 mx-auto lg:w-full font-semibold text-sm text-slate-500/60">
              Animals
            </p>
            <div className="w-11/12 mx-auto lg:w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 mb-12 gap-1">
              <GridElement imagePath={museum.src} />
              <GridElement imagePath={gorilla.src} />
              <GridElement imagePath={falcon.src} />
              <GridElement imagePath={polar.src} />
            </div>
            <p className="w-11/12 mx-auto lg:w-full font-semibold text-sm text-slate-500/60">
              Buildings
            </p>
            <div className="w-11/12 mx-auto lg:w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 mb-12 gap-1">
              <GridElement imagePath={arc_triomphe.src} />
              <GridElement imagePath={building.src} />
              <GridElement imagePath={restaurant.src} />
            </div>
            <p className="w-11/12 mx-auto lg:w-full font-semibold text-sm text-slate-500/60">
              View
            </p>
            <div className="w-11/12 mx-auto lg:w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 mb-12 gap-1">
              <GridElement imagePath={view.src} />
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
}
function GridElement({ imagePath }: GridElementProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="">
      <img
        src={imagePath}
        alt="Gallery image"
        onClick={handleClick}
        className="hover:cursor-pointer"
      />
      {isClicked && (
        <div
          className="fixed w-full h-full top-0 left-0 z-50 bg-black bg-opacity-90 flex justify-center items-center"
          onClick={handleClick}
        >
          <img
            className="h-[95%] hover:cursor-pointer"
            src={imagePath}
            alt="Gallery image"
          />
        </div>
      )}
    </div>
  );
}
