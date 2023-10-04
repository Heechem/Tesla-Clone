const ImageGrid = ({ img1, img2, text1, text2 }) => {
  return (
    <div className=" grid  grid-cols-2 items-center gap-5 overflow-x-auto">
      <div>
        <img
          className=" h-full w-screen "
          //   src="https://images.pexels.com/photos/10029872/pexels-photo-10029872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src={img1}
          alt=""
        />
      </div>

      <div className="text-center">{text1}</div>
      <div className="">
        <img
          src="https://images.pexels.com/photos/10549262/pexels-photo-10549262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-full w-screen"
        />
      </div>
      <div
        className="text-center
      "
      >
        {text2}
      </div>
    </div>
  );
};

export default ImageGrid;
