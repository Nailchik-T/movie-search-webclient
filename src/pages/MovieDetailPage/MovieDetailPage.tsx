import MovieDetails from "../../features/MovieDetails/MovieDetails.tsx";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { movieId } = useParams<{ movieId?: string }>();

  if (!movieId) {
    return <div>Movie not found</div>;
  }
  return <MovieDetails movieId={movieId} />;
};

export default MovieDetailPage;
