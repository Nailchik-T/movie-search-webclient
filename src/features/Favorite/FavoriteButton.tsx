import { IconButton, useTheme } from "@mui/material";
import { IMovie } from "../../shared/api/movie/model/model.ts";
import { observer } from "mobx-react-lite";
import FavoriteIcon from "@mui/icons-material/Favorite";
import favoriteMoviesStore from "./store/FavoriteMoviesStore.ts";
import toast from "react-hot-toast";

interface FavoriteButtonProps {
  movie: IMovie;
}

const FavoriteButton = observer(({ movie }: FavoriteButtonProps) => {
  const theme = useTheme();
  const notifyAdd = () => toast.success("Movie added to favorites!");
  const notifyRemove = () => toast.success("Movie removed from favorites!");
  const isFavorite = favoriteMoviesStore.isFavorite(movie.imdbID);

  const toggleFavorite = () => {
    if (isFavorite) {
      favoriteMoviesStore.removeMovie(movie.imdbID);
      notifyRemove();
    } else {
      favoriteMoviesStore.addMovie(movie);
      notifyAdd();
    }
  };

  return (
    <IconButton
      onClick={toggleFavorite}
      sx={{
        position: "absolute",
        top: 20,
        right: 20,
        color: isFavorite
          ? theme.palette.error.main
          : theme.palette.error.light,
      }}
      aria-label="add to favorites"
    >
      <FavoriteIcon />
    </IconButton>
  );
});

export default FavoriteButton;
