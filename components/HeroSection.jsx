import Image from "next/image";
import CTAButton from "./CTAButton";

function HeroSection() {
  return (
    <>
      <div className="px-5 py-24 flex flex-col gap-5 items-center md:items-start md:w-3/4 m-auto">
        <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-10">
          <div className="flex flex-col gap-8 w-full md:w-1/2 items-start">
            <h1 className="text-4xl font-bold text-white ">
              Borislav Atanasov
            </h1>
            <p className="text-[#9C9C9C]">
              {`I'm a software engineer and I'm passionate about web development. I have
          experience in building web applications with modern technologies like
          React, Next.js, and Node.js. I'm also interested in learning new
          technologies and frameworks.`}
            </p>
            <a
              href="/borislav-cv.pdf"
              className="self-center md:self-start"
              download={true}
            >
              <CTAButton>Download CV</CTAButton>
            </a>
          </div>
          <Image
            className="rounded-full"
            src="/profile-image.webp"
            width={300}
            height={300}
            alt="Borislav Atanasov's picture"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
