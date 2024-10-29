import { ISearchResult } from "../../../shared/api/movie/model/model.ts";
import { action, makeObservable, observable, runInAction } from "mobx";
import { searchMoviesApi } from "../../../shared/api/movie";

class MoviesStore {
  movies: ISearchResult[] = [];
  isLoading: boolean = false;
  error: string | null = null;
  searchQuery: string = "";

  constructor() {
    makeObservable(this, {
      movies: observable,
      isLoading: observable,
      error: observable,
      searchQuery: observable,
      searchMovies: action,
    });

    this.loadMoviesFromLocalStorage();
    this.loadSearchQueryFromLocalStorage();
  }

  loadMoviesFromLocalStorage() {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      this.movies = JSON.parse(storedMovies);
    }
  }
  loadSearchQueryFromLocalStorage() {
    const storedQuery = localStorage.getItem("searchQuery");
    if (storedQuery) {
      this.searchQuery = storedQuery;
    }
  }

  saveMoviesToLocalStorage() {
    localStorage.setItem("movies", JSON.stringify(this.movies));
  }

  searchMovies = async (query: string) => {
    this.searchQuery = query;
    localStorage.setItem("searchQuery", query);

    if (query) {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await searchMoviesApi(query);
        runInAction(() => {
          this.movies = response;
          this.saveMoviesToLocalStorage();
          this.isLoading = false;
        });
      } catch (err) {
        runInAction(() => {
          this.error = "Error fetching movies";
          this.isLoading = false;
        });
      }
    } else {
      runInAction(() => {
        this.movies = [];
        this.isLoading = false;
      });
    }
  };
}

export const moviesStore = new MoviesStore();
