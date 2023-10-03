import "../../index.css";

const ImageBackgroundSection = ({
  bgImage,
  header,
  description,
  featureItems = [],
}) => {
  return (
    <div
      className={`${bgImage} min-w-screen hide-scrollbar relative flex h-screen   snap-center overflow-auto bg-cover  bg-center before:absolute before:left-0 before:top-0 before:h-full before:w-full before:opacity-50 before:blur-[2px] sm:object-cover`}
    >
      <div className=" z-1 flex h-screen w-screen flex-col items-center justify-center  ">
        <div className="m-auto flex flex-col items-center  text-3xl">
          <h2 className="pb-5">{header}</h2>
          <p className="pt-5">{description}</p>
        </div>

        <div className="   flex w-full items-center justify-evenly gap-6 sm:flex-col ">
          {featureItems.length > 0 && (
            <ul className="flex list-none  flex-wrap items-center justify-center gap-12 text-center sm:flex-row">
              {featureItems.map(({ title, description }) => (
                <li key={title}>
                  <h6 className="text-xl font-bold">{title}</h6>
                  <p className="font-lg">{description}</p>
                </li>
              ))}
            </ul>
          )}
          <div className="z-10 mb-6 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <button className=" rounded-md border-2 px-16 py-3 text-xl transition duration-150 ease-in-out hover:bg-slate-100 hover:text-black">
              Order Now
            </button>
            <button className="rounded-md border-2 px-16 py-3 text-xl transition duration-150 ease-in-out hover:bg-slate-100 hover:text-black">
              Demo Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBackgroundSection;
