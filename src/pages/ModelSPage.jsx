import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";
import ImageGrid from "../components/imageGrid/ImageGrid";
import NoTextImageBackground from "../components/noTextImageBackground/NoTextImageBackground";
import "../index.css";
import doors from "../assets/Doors.jpg";

const featureItems = [
  { title: "3.1s 0-60 mph", description: "AWD  Dual Motor" },
  { title: "536 km  Range ", description: "9.9s 1/4 Mile" },
  { title: "497Km  Range ", description: "AWD  Dual Motor" },
  { title: "637Km  Range", description: "322Km/h Top speed" },
];

const ModelSPage = () => {
  return (
    <>
      <div
        className="hide-scrollbar h-screen overflow-auto overflow-x-hidden bg-cover bg-center"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <ImageBackgroundSection
          header={"Model S"}
          description={"view inventory"}
          bgImage={"bg-modelS"}
          featureItems={featureItems}
        />
        <NoTextImageBackground bgImage={"bg-insideModel"} />{" "}
        <NoTextImageBackground bgImage={"bg-charger"} />
      </div>

      <ImageGrid
        img1={doors}
        text1={
          "The inside of Model 3 is unlike any other vehicle with unrivaled technology, premium materials and plenty of legroom."
        }
        text2={
          "Accelerate from 0-100 km/h* in as little as 3.3 seconds with an optional Performance upgrade—featuring Dual Motor AWD, upgraded brakes and more."
        }
      />
    </>
  );
};

export default ModelSPage;
