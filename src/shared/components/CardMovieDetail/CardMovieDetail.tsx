import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { IMovie } from "../../api/movie/model/model.ts";
import { observer } from "mobx-react-lite";
import FavoriteButton from "../../../features/Favorite/FavoriteButton.tsx";

interface ICardMovieDetailProps {
  movie: IMovie;
}

export const CardMovieDetail = observer(({ movie }: ICardMovieDetailProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        p: 3,
        borderRadius: 10,
        maxWidth: "100%",
        position: "relative",
        "@media (max-width: 650px)": {
          flexDirection: "column",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 255,
          height: 255,
          borderRadius: "20px",
          "@media (max-width: 650px)": {
            width: "100%",
          },
        }}
        image={movie.Poster}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movie.Title}
          </Typography>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 14,
            }}
            component="div"
          >
            Genre:{" "}
            <Typography component="span" color="text.secondary">
              {movie.Genre}
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 14,
            }}
            component="div"
          >
            Year:{" "}
            <Typography component="span" color="text.secondary">
              {movie.Year}
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 14,
            }}
            component="div"
          >
            Actors:{" "}
            <Typography component="span" color="text.secondary">
              {movie.Actors}
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              color: "text.secondary",
              fontSize: 16,
              mb: 5,
            }}
          >
            {movie.Plot}
          </Typography>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/5lON9wgoKT4?si=C45hIs1c8hAoYn1j"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </CardContent>
      </Box>

      <FavoriteButton movie={movie} />
    </Card>
  );
});
