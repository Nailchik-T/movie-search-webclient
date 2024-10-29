import { makeAutoObservable } from "mobx";
import { IMovie } from "../../../shared/api/movie/model/model.ts";

class FavoriteMoviesStore {
  favoriteMovies: IMovie[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFavoritesFromLocalStorage();
  }

  loadFavoritesFromLocalStorage() {
    const storedFavorites = localStorage.getItem("favoriteMovies");
    if (storedFavorites) {
      this.favoriteMovies = JSON.parse(storedFavorites);
    }
  }

  saveFavoritesToLocalStorage() {
    localStorage.setItem("favoriteMovies", JSON.stringify(this.favoriteMovies));
  }

  addMovie(movie: IMovie) {
    if (!this.favoriteMovies.some((fav) => fav.imdbID === movie.imdbID)) {
      this.favoriteMovies.push(movie);
      this.saveFavoritesToLocalStorage();
    }
  }

  removeMovie(imdbID: string) {
    this.favoriteMovies = this.favoriteMovies.filter(
      (movie) => movie.imdbID !== imdbID,
    );
    this.saveFavoritesToLocalStorage();
  }

  isFavorite(imdbID: string): boolean {
    return this.favoriteMovies.some((movie) => movie.imdbID === imdbID);
  }
}

const favoriteMoviesStore = new FavoriteMoviesStore();
export default favoriteMoviesStore;
