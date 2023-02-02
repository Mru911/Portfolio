import React from "react";
import myimage from "./../../assets/About/Mrugank_Deshpande_Photo.jpg";

const About = () => {
  return (
    <div>
      <h1 className="text-lg lg:text-3xl  font-bold text-warning text-center py-10">
        About Me
      </h1>

      <div className=" bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="w-[300px] lg:w-full">
            <img src={myimage} alt="" className="rounded h-[350px]  " />
          </div>
          <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
            <h1 className="lg:text-5xl text-warning font-bold"></h1>
            <p className="py-6 lg:text-lg text-sm text-center">
              Hi there! My name is Mrugank Deshpande and I am a frontend developer
              specialize in creating modern,
              responsive websites and applications using HTML, CSS, and
              JavaScript. I have a passion for designing intuitive user
              interfaces and crafting smooth user experiences. I am always
              learning and staying up-to-date with the latest technologies and
              best practices in frontend development. In my previous roles, I
              have worked on a variety of projects for clients ranging from
              small businesses to large corporations. I am confident in my
              ability to deliver high-quality solutions on time and within
              budget. Outside of work, I enjoy staying active and exploring the
              outdoors. I also love to spend time with my family and friends,
              and am always looking for new and exciting experiences. Thank you
              for visiting my about me page. I hope to have the opportunity to
              work with you and bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
