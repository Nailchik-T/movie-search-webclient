import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { moviesStore } from "../MovieList/store/MoviesStore.ts";
import { ChangeEvent, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useDebounce } from "./lib/useDebounce.ts";

export const SearchMovies = observer(() => {
  const { searchMovies, searchQuery } = moviesStore;
  const debouncedQuery = useDebounce(searchQuery, 500);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    moviesStore.searchQuery = event.target.value;
  };

  useEffect(() => {
    if (debouncedQuery) {
      searchMovies(debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <TextField
      sx={{ width: "100%", borderRadius: 10 }}
      id="outlined-controlled"
      label="Search"
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Find a movie by name"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
});
