import { observer } from "mobx-react-lite";
import { moviesStore } from "./store/MoviesStore.ts";
import { Alert, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { CardMovie } from "../../shared/components/CardMovie";

const MovieList = observer(() => {
  if (moviesStore.isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "70vh",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (moviesStore.movies.length === 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Alert severity="info">No movies found.</Alert>
      </Box>
    );
  }

  if (moviesStore.error) {
    return <Alert severity="error">An error occurred.</Alert>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3.5,
        mt: 4,
      }}
    >
      {moviesStore.movies.map((movie) => (
        <CardMovie key={movie.imdbID} movie={movie} />
      ))}
    </Box>
  );
});

export default MovieList;
