const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <button className="bg-white text-black p-4 px-12 hover:bg-opacity-80 rounded-lg">
        Play
      </button>
      <button className="mx-2 bg-white text-black p-4 px-12 hover:bg-opacity-80  rounded-lg">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
