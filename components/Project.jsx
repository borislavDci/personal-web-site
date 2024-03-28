"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CTAButton from "./CTAButton";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

function Project({ links, image, title, description, colors }) {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% ${
    isMobileDevice ? "15%" : "0%"
  } , #020617 50%, ${color})`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobileDevice(true);
    }
  }, []);

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div
      className="flex gap-5 flex-col relative overflow-hidden rounded-lg p-10 py-8"
      style={{
        backgroundImage,
        boxShadow,
      }}
    >
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="text-xl">{description}</p>
      <Image
        className="w-auto h-auto  rounded-md my-5"
        alt="Project 1"
        src={`/${image}`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="flex flex-col md:flex-row gap-5 self-center md:self-start">
        {links && links.code && (
          <a href={links.code} target="_blank" rel="noopener noreferrer">
            <CTAButton>View Code</CTAButton>
          </a>
        )}
        {links && links.live && (
          <a href={links.live} target="_blank" rel="noopener noreferrer">
            <CTAButton>View Live</CTAButton>
          </a>
        )}{" "}
      </div>
    </motion.div>
  );
}

export default Project;
