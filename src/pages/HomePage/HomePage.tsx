import { SearchMovies } from "../../features/SearchMovies";
import MovieList from "../../features/MovieList";

const HomePage = () => {
  return (
    <>
      <SearchMovies />
      <MovieList />
    </>
  );
};

export default HomePage;
