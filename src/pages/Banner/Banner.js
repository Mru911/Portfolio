import React from "react";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import portfolioAnimation from "./../../assets/Banner/91382-web-development.json";

const Banner = () => {
  return (
    <div>
      <div className=" bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="w-[300px] lg:w-full">
            <Lottie animationData={portfolioAnimation} loop={true} />
          </div>
          <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
            <h1 className="lg:text-5xl text-warning font-bold">
              <Typewriter
                options={{
                  strings: [
                    "I am Mrugank Deshpande",
                    "A Frontend web developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="py-6 lg:text-lg text-sm text-center">
              I am a frontend web
              developer. With a strong foundation in HTML, CSS, and JavaScript,
              I am skilled at creating visually appealing and user-friendly
              websites and applications. I have experience working with a
              variety of frameworks and libraries, and I am always looking to
              learn and improve my skills. In my career as a frontend developer,
              I have had the opportunity to work on a variety of projects and
              collaborate with cross-functional teams. I am dedicated to
              delivering high-quality work and am always looking for new
              challenges and opportunities to showcase my skills. I am excited
              to continue growing and learning in my career as a frontend
              developer and am committed to staying up-to-date with the latest
              trends and technologies in the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
