import React from "react";

const NoTextImageBackground = ({ bgImage }) => {
  return (
    <div
      className={`${bgImage} min-w-screen relative flex h-screen snap-center   overflow-auto bg-cover bg-center  before:absolute before:left-0 before:top-0 before:h-full before:w-full before:opacity-50 before:blur-[2px] sm:object-cover`}
    >
      <div className=" z-1 flex h-screen w-screen flex-col items-center justify-center  "></div>
    </div>
  );
};

export default NoTextImageBackground;
