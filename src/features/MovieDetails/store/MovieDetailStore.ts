import { action, makeObservable, observable, runInAction } from "mobx";
import { IMovie } from "../../../shared/api/movie/model/model.ts";
import { getMovieDetailsApi } from "../../../shared/api/movie";

class MovieDetailStore {
  movie: IMovie | null = null;
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeObservable(this, {
      movie: observable,
      isLoading: observable,
      error: observable,
      fetchMovieDetails: action,
    });
  }

  async fetchMovieDetails(movieId: string) {
    this.isLoading = true;
    this.error = null;

    try {
      const response = await getMovieDetailsApi(movieId);

      if (response.Response === "Incorrect IMDb ID.") {
        throw new Error("error");
      }

      runInAction(() => {
        this.movie = response;
        this.isLoading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.error = "Error fetching movie details";
        this.isLoading = false;
      });
    }
  }
}

export const movieDetailStore = new MovieDetailStore();
