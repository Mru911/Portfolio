import React from "react";
import Lottie from "lottie-react";

const Service = ({ service }) => {
  const { serviceName, animation } = service;
  return (
    <div>
      <div className=" h-[350px] card w-96 bg-base-100 shadow-xl hover:border-2 hover:border-red-800 realtive cursor-pointer">
        <figure className="px-15 pt-10">
          <Lottie className="w=1/2 h-[150px] " animationData={animation} loop={true} />
        </figure>
        <div className="card-body items-center text-center absolute bottom-0 mb-5">
          <h2 className="card-title">{serviceName}</h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
