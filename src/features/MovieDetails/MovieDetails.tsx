import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { movieDetailStore } from "./store/MovieDetailStore.ts";
import { Box, CircularProgress } from "@mui/material";
import { CardMovieDetail } from "../../shared/components/CardMovieDetail";
import { useNavigate } from "react-router-dom";

const MovieDetail = observer(({ movieId }: { movieId: string }) => {
  const navigate = useNavigate();

  useEffect(() => {
    movieDetailStore.fetchMovieDetails(movieId).then(() => {
      if (movieDetailStore.error) {
        navigate("/");
      }
    });
  }, [movieId, navigate]);

  if (movieDetailStore.isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (movieDetailStore.error) {
    return <div>Error: {movieDetailStore.error}</div>;
  }

  if (!movieDetailStore.movie) {
    return <div>No movie details found.</div>;
  }

  return <CardMovieDetail movie={movieDetailStore.movie} />;
});

export default MovieDetail;
