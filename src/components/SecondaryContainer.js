import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Upcomming"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Popular"} movies={movies.popularMovies} />
          <MoviesList title={"Horror"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Action"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
