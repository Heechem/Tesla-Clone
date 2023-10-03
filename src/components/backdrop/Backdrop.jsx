const Backdrop = ({ onClick }) => {
  return (
    <div
      className="z-100 fixed left-0 top-0 h-full w-full bg-black bg-opacity-80 blur-3xl "
      onClick={onClick}
    >
      Backdrop
    </div>
  );
};

export default Backdrop;
