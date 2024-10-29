import { NavLink } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ISearchResult } from "../../api/movie/model/model.ts";

interface ICardMovieProps {
  movie: ISearchResult;
}
export const CardMovie = ({ movie }: ICardMovieProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        p: 3,
        flexDirection: "column",
        borderRadius: 10,
        width: 300,
        position: "relative",
        "@media (max-width: 650px)": {
          flexDirection: "column",
        },
      }}
    >
      <NavLink
        to={`/movie/${movie.imdbID}`}
        key={movie.imdbID}
        style={{ textDecoration: "none", cursor: "pointer" }}
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
          alt={movie.Title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              sx={{
                color: "text.primary",
              }}
              component="div"
              variant="h5"
            >
              {movie.Title}
            </Typography>
          </CardContent>
        </Box>
      </NavLink>
    </Card>
  );
};
