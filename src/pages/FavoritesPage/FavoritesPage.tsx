import { observer } from "mobx-react-lite";
import { Box, Typography } from "@mui/material";
import favoriteMoviesStore from "../../features/Favorite/store/FavoriteMoviesStore.ts";
import { CardMovie } from "../../shared/components/CardMovie";

const FavoritesPage = observer(() => {
  if (favoriteMoviesStore.favoriteMovies.length === 0) {
    return (
      <Typography sx={{ textAlign: "center" }}>
        No favorite movies added yet.
      </Typography>
    );
  }

  return (
    <Box>
      <Typography
        sx={{
          color: "text.primary",
          fontSize: 25,
        }}
        gutterBottom
        component="div"
      >
        My Favorite Movies
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",

          gap: 3.5,
        }}
      >
        {favoriteMoviesStore.favoriteMovies.map((movie) => (
          <CardMovie key={movie.imdbID} movie={movie} />
        ))}
      </Box>
    </Box>
  );
});
export default FavoritesPage;
