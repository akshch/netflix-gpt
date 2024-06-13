import Header from "./Header";
import useNowPLayingMoives from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMoives from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPLayingMoives();
  usePopularMoives();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
