import TeslaVid from "../../assets/tesla-vid.mp4";

const HomeSectionVideo = () => {
  return (
    <div className="scroll relative  h-screen overflow-hidden">
      <video
        className=" absolute bottom-0 right-0 top-0 z-10 min-h-full min-w-full object-cover "
        autoPlay
        muted
        loop
      >
        <source src={TeslaVid} />
      </video>
      <div className="flex h-screen w-screen flex-col items-center justify-around text-center">
        <div>
          <h1 className="pb-10 text-center text-5xl font-bold">
            Experience Tesla
          </h1>
          <h5 className="text-xl">Scheduel a demo drive today</h5>
        </div>
        <div>
          <button className="rounded-md  border-2 px-16 py-3 text-xl transition duration-150 ease-in-out hover:bg-slate-100 hover:text-black">
            Demo Drive
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionVideo;
