"use client";

import React, { useEffect, useState } from "react";
import "./Solar.css";
import { motion } from "framer-motion";

import OrbitItem from "./utils/OrbitItem";

import me from "../assets/orbits/me.png";

import vs from "../assets/orbits/vs.png";
import figma from "../assets/orbits/figma.png";
import intelij from "../assets/orbits/intelij.png";

import html from "../assets/orbits/html.png";
import css from "../assets/orbits/css.png";
import react from "../assets/orbits/react.png";
import node from "../assets/orbits/node.png";
import java from "../assets/orbits/java.png";
import python from "../assets/orbits/python.png";
import next from "../assets/orbits/next.png";
import tailwind from "../assets/orbits/tailwind.png";
import flask from "../assets/orbits/flask.png";
import spring from "../assets/orbits/spring.png";

import git from "../assets/orbits/git.png";
import bash from "../assets/orbits/bash.png";
import junit from "../assets/orbits/junit.png";
import maven from "../assets/orbits/maven.png";
import firebase from "../assets/orbits/firebase.png";
import postgres from "../assets/orbits/postgres.png";
import mongo from "../assets/orbits/mongo.png";
import selenium from "../assets/orbits/selenium.png";
import tf from "../assets/orbits/tf.png";
import npm from "../assets/orbits/npm.png";

import gcp from "../assets/orbits/gcp.png";
import aws from "../assets/orbits/aws.png";
import docker from "../assets/orbits/docker.png";
import anaconda from "../assets/orbits/anaconda.png";
import linux from "../assets/orbits/linux.png";
import window from "../assets/orbits/window.png";
import postman from "../assets/orbits/postman.png";

import zoom from "../assets/orbits/zoom.png";
import adobe from "../assets/orbits/adobe.png";
import blender from "../assets/orbits/blender.png";
import obsidian from "../assets/orbits/obsidian.png";
import ur from "../assets/orbits/ur.png";
import unity from "../assets/orbits/unity.png";

function Solar() {
  const [hoverTech, setHoverTech] = useState("");

  useEffect(() => {
    const orbits = document.querySelectorAll(".orbit");

    orbits.forEach((orbit) => {
      const orbitItems = orbit.querySelectorAll(".orbit-item");
      const numItems = orbitItems.length;

      orbitItems.forEach((item, i) => {
        const angle = (360 / numItems) * i;
        const radius = 50; // Adjust the radius as needed

        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        const htmlItem = item as HTMLElement;

        htmlItem.style.position = "absolute";
        htmlItem.style.left = `${50 + x}%`;
        htmlItem.style.top = `${50 + y}%`;
        htmlItem.style.transform = `translate(-50%, -50%)`;
      });
    });
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 z-50">
        <h1 className="text-neutral-300 font-medium text-sm font-mono">{hoverTech}</h1>
      </div>
      <div className="solar">
        <motion.img
          src={me.src}
          alt="sun"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
        <div className="orbit-container">
          <motion.div
            className="orbit"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <OrbitItem
              orbitImage={vs.src}
              className="orbit_2xl"
              setHoverTech={setHoverTech}
              tech="Visual Studio Code"
            />
            <OrbitItem
              orbitImage={figma.src}
              className="orbit_lg"
              setHoverTech={setHoverTech}
              tech="Figma"
            />
            <OrbitItem
              orbitImage={intelij.src}
              className="orbit_lg"
              setHoverTech={setHoverTech}
              tech="Intelli J"
            />
          </motion.div>
          <motion.div
            className="orbit"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <OrbitItem
              orbitImage={html.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="HTML"
            />
            <OrbitItem
              orbitImage={css.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="CSS"
            />
            <OrbitItem
              orbitImage={react.src}
              className="orbit_2xl"
              setHoverTech={setHoverTech}
              tech="ReactJS"
            />
            <OrbitItem
              orbitImage={node.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="NodeJS"
            />
            <OrbitItem
              orbitImage={java.src}
              className="orbit_lg"
              setHoverTech={setHoverTech}
              tech="Java"
            />
            <OrbitItem
              orbitImage={python.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="Python"
            />
            <OrbitItem
              orbitImage={next.src}
              className="orbit_lg"
              setHoverTech={setHoverTech}
              tech="Next"
            />
            <OrbitItem
              orbitImage={tailwind.src}
              className="orbit_2xl"
              setHoverTech={setHoverTech}
              tech="Tailwind CSS"
            />
            <OrbitItem
              orbitImage={flask.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="Flask"
            />
            <OrbitItem
              orbitImage={spring.src}
              className="orbit_md"
              setHoverTech={setHoverTech}
              tech="Spring"
            />
          </motion.div>

          <motion.div
            className="orbit"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <OrbitItem
              orbitImage={git.src}
              className="orbit_2xl"
              setHoverTech={setHoverTech}
              tech="Git"
            />
            <OrbitItem
              orbitImage={bash.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="Bash"
            />
            <OrbitItem
              orbitImage={junit.src}
              className="orbit_sm"
              setHoverTech={setHoverTech}
              tech="JUnit"
            />
            <OrbitItem
              orbitImage={maven.src}
              className="orbit_sm"
              setHoverTech={setHoverTech}
              tech="Maven"
            />
            <OrbitItem
              orbitImage={firebase.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="Firebase"
            />
            <OrbitItem
              orbitImage={postgres.src}
              className="orbit_md"
              setHoverTech={setHoverTech}
              tech="PostGres SQL"
            />
            <OrbitItem
              orbitImage={mongo.src}
              className="orbit_md"
              setHoverTech={setHoverTech}
              tech="Mongo DB"
            />
            <OrbitItem
              orbitImage={selenium.src}
              className="orbit_lg"
              setHoverTech={setHoverTech}
              tech="Selenium"
            />
            <OrbitItem
              orbitImage={tf.src}
              className="orbit_lg"
              setHoverTech={setHoverTech}
              tech="Tensorflow"
            />
            <OrbitItem
              orbitImage={npm.src}
              className="orbit_2xl"
              setHoverTech={setHoverTech}
              tech="Node Package Manager"
            />
          </motion.div>

          <motion.div
            className="orbit"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <OrbitItem
              orbitImage={gcp.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="Google Cloud Platform"
            />
            <OrbitItem
              orbitImage={aws.src}
              className="orbit_md"
              setHoverTech={setHoverTech}
              tech="Amazon Web Services"
            />
            <OrbitItem
              orbitImage={docker.src}
              className="orbit_lg"
              setHoverTech={setHoverTech}
              tech="Docker"
            />
            <OrbitItem
              orbitImage={anaconda.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="Anaconda"
            />
            <OrbitItem
              orbitImage={linux.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="Linux"
            />
            <OrbitItem
              orbitImage={window.src}
              className="orbit_2xl"
              setHoverTech={setHoverTech}
              tech="Window"
            />
            <OrbitItem
              orbitImage={postman.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="Postman"
            />
          </motion.div>

          <motion.div
            className="orbit"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 5 }}
          ></motion.div>

          <motion.div
            className="orbit"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 6 }}
          >
            <OrbitItem
              orbitImage={zoom.src}
              className="orbit_md"
              setHoverTech={setHoverTech}
              tech="Zoom"
            />
            <OrbitItem
              orbitImage={obsidian.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="Obsidian"
            />
            <OrbitItem
              orbitImage={blender.src}
              className="orbit_xl"
              setHoverTech={setHoverTech}
              tech="Blender"
            />
            <OrbitItem
              orbitImage={adobe.src}
              className="orbit_2xl"
              setHoverTech={setHoverTech}
              tech="Adobe"
            />
            <OrbitItem
              orbitImage={ur.src}
              className="orbit_sm"
              setHoverTech={setHoverTech}
              tech="Unreal Engine"
            />
            <OrbitItem
              orbitImage={unity.src}
              className="orbit_sm"
              setHoverTech={setHoverTech}
              tech="Unity"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Solar;
