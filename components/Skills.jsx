"use client";
import React from "react";
import GridElement from "./GridElement";

function Grid() {
  return (
    <div
      className="w-full px-10 2xl:p-0 2xl:w-3/4 m-auto flex flex-col gap-10 lg:scroll-m-40"
      id="skills"
    >
      <h2 className="text-[#9C9C9C] text-6xl uppercase">Skills</h2>
      <div className="text-white  grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-2 ">
        <GridElement
          content={{
            title: "React JS",
            description:
              "As a React.js developer, I specialize in building modern, single-page applications with reusable components. Leveraging React's virtual DOM and state management capabilities, I create performant and scalable frontends that provide seamless user experiences.",
          }}
          rowSpan="row-span-2"
          backgroundImage={"react-logo.png"}
          backgroundColor={{
            initial: "#00234c",
            animate: "#0074ff",
          }}
          borderColor="#032b5e"
        />
        <GridElement
          content={{
            title: "MongoDB",
            description:
              "In the realm of databases, MongoDB stands out for its flexibility and scalability, offering a schema-less approach to data storage. I harness its power to model complex data structures and ensure seamless integration with Node.js, delivering efficient and scalable data solutions.",
          }}
          backgroundImage={"mongodb-logo.png"}
          backgroundColor={{
            initial: "#144030",
            animate: "#43d6a0",
          }}
          borderColor="#43d6a0"
        />
        <GridElement
          content={{
            title: "Express JS",
            description:
              "With its minimalist design and robust features, I leverage Express.js to streamline routing, middleware integration, and request handling. From serving static files to implementing advanced middleware for authentication and error handling, I utilize Express.js to create scalable and efficient backend solutions.",
          }}
          backgroundImage={"expressjs.webp"}
          backgroundColor={{
            initial: "#000",
            animate: "#FFF",
          }}
          borderColor="#FFF"
        />
        <GridElement
          content={{
            title: "Node JS",
            description:
              "Node.js is more than just web servers for me; it's a versatile tool that's powered some exciting projects. I've dived into building command-line tools and utilities, using Node.js to simplify tasks and automate workflows. Whether it's crunching data or simplifying routine chores, Node.js has been my companion for coding adventures beyond the browser.",
          }}
          backgroundImage={"nodejs.png"}
          backgroundColor={{
            initial: "#071510",
            animate: "#288060",
          }}
          borderColor="#FFF"
        />

        <GridElement
          content={{
            title: "Javascript",
            description:
              "Mastering the language of the web, JavaScript empowers me to create dynamic and interactive user experiences. From DOM manipulation to asynchronous programming with promises and async/await, I leverage JavaScript's versatility to craft engaging web applications.",
          }}
          rowSpan="row-span-2"
          backgroundImage={"javascript.png"}
          backgroundColor={{
            initial: "#2d3300",
            animate: "#b5cc00",
          }}
          borderColor="#FFF"
        />
        <GridElement
          content={{
            title: "Tailwind CSS",
            description:
              "Tailwind CSS has revolutionized my frontend workflow by providing a utility-first approach to styling. With Tailwind, I efficiently design responsive layouts and UI components, achieving consistent and visually appealing designs while keeping the codebase clean and maintainable.",
          }}
          backgroundImage={"tailwind-logo.png"}
          backgroundColor={{
            initial: "#00494c",
            animate: "#00dae6",
          }}
          borderColor="#FFF"
        />

        <GridElement
          content={{
            title: "HTML & CSS",
            description:
              "HTML and CSS form the backbone of every web page, and I excel in crafting clean, semantic HTML structures and styling them with CSS to achieve stunning visual designs. With a meticulous eye for detail and a focus on responsive design principles, I ensure that every website I build looks great on any device.",
          }}
          backgroundImage={"html-css.png"}
          backgroundColor={{
            initial: "#662c00",
            animate: "#e66300",
          }}
          borderColor="#FFF"
        />
      </div>
    </div>
  );
}

export default Grid;
