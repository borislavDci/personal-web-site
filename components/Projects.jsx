import React from "react";
import Project from "./Project";

function Projects() {
  return (
    <div
      className="w-full  lg:w-3/4 m-auto flex flex-col gap-10 text-[#9C9C9C] p-2 md:p-5 lg:scroll-m-40"
      id="projects"
    >
      <h2 className="text-6xl uppercase">Projects</h2>
      <div className="flex gap-40 flex-col">
        <Project
          title="Personal website"
          description="This is my personal website that I built using Next.js and Tailwind CSS. It is a static website that is hosted on Vercel. I used Figma to design the layout and the components of the website. I also used framer motion to create the animations."
          links={{
            code: "https://github.com/borislavDci/personal-web-site",
            live: null,
          }}
          image="portfolio.png"
          colors={[
            "#00234c",
            "#144030",
            "#000",
            "#071510",
            "#2d3300",
            "#00494c",
            "#662c00",
          ]}
        />
        <Project
          title="Drive mate"
          description={`Elevated the Drive Mate project by developing both
          frontend and backend functionalities for a peer-to-peer car
          rental platform. Enhanced the user interface for seamless navigation, allowing customers to easily browse and rent cars listed by car owners. Implemented robust features ensuring a user-friendly experience, ultimately contributing
          to the success of the platform in facilitating peer-to-peer car
          rentals.
          I used React and Tailwind CSS for the frontend, Node.js and Express.js for backend and MongoDB for database. For authentication, I used JWT (JSON Web Token).`}
          links={{
            code: "https://github.com/borislavDci/DriveMate",
            live: null,
          }}
          image="drive-mate.png"
          colors={["#00234c", "#0074ff"]}
        />
        <Project
          title="Auto service management platform"
          description={`Comprehensive auto service management platform that enables users to track service history, and manage vehicle maintenance. Enhanced the platform with a user-friendly interface, allowing customers to easily access service records. Currenlty working on the project.`}
          image="car-management.png"
          colors={[
            "#00234c",
            "#0074ff",
            "#144030",
            "#43d6a0",
            "#FFF",
            "#071510",
            "#288060",
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
