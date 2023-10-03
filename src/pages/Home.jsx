import HomeSectionVideo from "../components/homeSectionVideo/HomeSectionVideo";
import ImageBackgroundSection from "../components/imageBackgroundSection/ImageBackgroundSection";

const Home = () => {
  return (
    <div style={{ scrollSnapType: "y mandatory" }}>
      <HomeSectionVideo />
      <div
        className="h-screen  overflow-auto   "
        style={{ scrollSnapType: "y mandatory" }}
      >
        <ImageBackgroundSection
          header={"model S"}
          description={"view inventory"}
          bgImage={"bg-modelS"}
        />
        <ImageBackgroundSection
          header={"model Y"}
          description={"view inventory"}
          bgImage={"bg-modelY"}
        />
        <ImageBackgroundSection
          header={"model 3"}
          description={"view inventory"}
          bgImage={"bg-model3"}
        />
        <ImageBackgroundSection
          header={"Cyber Truck"}
          description={"view inventory"}
          bgImage={"bg-truck"}
        />
      </div>
    </div>
  );
};

export default Home;
