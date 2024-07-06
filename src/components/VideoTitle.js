const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6 md:px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xlfont-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black py-2 md:p-4 px-4 md:px-12 hover:bg-opacity-80 rounded-lg">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-white text-black p-4 px-12 hover:bg-opacity-80  rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
