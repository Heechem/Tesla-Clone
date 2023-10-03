import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import NoTextImageBackground from "../components/noTextImageBackground/NoTextImageBackground";
import "../index.css";

const featureItems = [
  { title: "3.1s 0-60 mph", description: "AWD  Dual Motor" },
  { title: "536 km  Range ", description: "9.9s 1/4 Mile" },
  { title: "497Km  Range ", description: "AWD  Dual Motor" },
  { title: "637Km  Range", description: "322Km/h Top speed" },
];

const ModelXPage = () => {
  return (
    <div
      className="hide-scrollbar h-screen overflow-y-auto  overflow-x-hidden bg-cover bg-center"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <ImageBackgroundSection
        header={"Model X"}
        description={"view inventory"}
        bgImage={"bg-modelX"}
        featureItems={featureItems}
      />
      <NoTextImageBackground bgImage={"bg-insideModelY"} />
    </div>
  );
};

export default ModelXPage;
