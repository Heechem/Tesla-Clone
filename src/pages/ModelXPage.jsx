import React from "react";
import Header from "../components/header/Header";
import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";

const featureItems = [
  { title: "3.1s 0-60 mph", description: "AWD  Dual Motor" },
  { title: "536 km  Range ", description: "9.9s 1/4 Mile" },
  { title: "497Km  Range ", description: "AWD  Dual Motor" },
  { title: "637Km  Range", description: "322Km/h Top speed" },
];

const ModelXPage = () => {
  return (
    <div className="h-screen overflow-hidden  bg-cover bg-center">
      <ImageBackgroundSection
        header={"Model X"}
        description={"view inventory"}
        bgImage={"bg-modelX"}
        featureItems={featureItems}
      />
    </div>
  );
};

export default ModelXPage;
