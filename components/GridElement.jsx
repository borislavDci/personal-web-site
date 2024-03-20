"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function GridElement({
  content,
  backgroundImage,
  backgroundColor,
  rowSpan = "row-span-1",
}) {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    console.log(window.innerWidth < 768);
    setIsMobileDevice(window.innerWidth < 768);
  }, []);
  const backgroundAnimate = {
    initial: {
      background: `url(/${backgroundImage}) center no-repeat`,
      height: "100%",
      width: "100%",
      opacity: 0.3,
      scale: 1,
      backgroundSize: "100%",
      transition: {
        duration: 1,
        delay: 3,
      },
    },
    animate: {
      background: `url(/${backgroundImage}) center no-repeat`,
      height: "100%",
      width: "100%",
      opacity: 0.1,
      scale: 1.25,
      backgroundSize: "120%",
      transition: {
        duration: 1,
      },
    },
  };
  const backgroundColorAnimate = {
    initial: {
      background: `${backgroundColor.initial}`,
      transition: {
        duration: 2,
      },
    },
    animate: {
      background: `${backgroundColor.animate}`,
      transition: {
        duration: 2,
      },
    },
  };
  const textAnimate = {
    initial: {
      position: "absolute",
      opacity: 0,
      top: "-50%",
      left: "50%",
      translate: "-50% -50%",
      transition: {
        duration: 2,
        delay: 2,
      },
    },
    animate: {
      position: "absolute",
      opacity: 1,
      top: "50%",
      left: "50%",
      translate: "-50% -50%",
      transition: {
        duration: 2,
      },
    },
  };
  const spanAnimate = {
    initial: {
      width: "0%",
      transition: {
        duration: 2,
        delay: 0,
      },
    },
    animate: {
      width: "100%",
      transition: {
        delay: 2,
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      initial="animate"
      animate="initial"
      whileHover="animate"
      whileInView={`${isMobileDevice ? "animate" : "initial"}`}
      viewport={{ amount: 1 }}
      className={`grid-box ${rowSpan} relative overflow-hidden`}
    >
      <motion.div
        className="w-full h-full absolute"
        variants={backgroundColorAnimate}
      ></motion.div>
      <motion.div
        style={{ opacity: 0.3 }}
        className="w-full h-full absolute top-0 left-0"
        variants={backgroundAnimate}
      ></motion.div>
      <motion.div
        className="flex flex-col w-full p-5 text-yellow-300"
        variants={textAnimate}
      >
        <motion.h2 className="text-4xl font-bold p-2 max-w-max relative">
          <motion.span
            variants={spanAnimate}
            animate={{
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
            className="absolute h-full bg-black top-0 left-0 z-[-1]"
          ></motion.span>
          {content.title}
        </motion.h2>
        <motion.p className="text-sm 2xl:text-md font-bold p-2 relative">
          {content.description}
          <motion.span
            variants={spanAnimate}
            animate={{
              borderTopRightRadius: "5px",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
            className="absolute h-full bg-black top-0 left-0 z-[-1]"
          ></motion.span>
        </motion.p>
      </motion.div>

      {/* <Image
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    src="/react-icon.svg"
    width={150}
    height={150}
    alt="React Icon"
  />{" "} */}
    </motion.div>
  );
}

export default GridElement;
