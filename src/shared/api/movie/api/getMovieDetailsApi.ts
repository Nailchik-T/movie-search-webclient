import { IMovie } from "../model/model.ts";
import { apiClient } from "../../index.ts";

export const getMovieDetailsApi = async (movieId: string): Promise<IMovie> => {
  const response = await apiClient.get<IMovie>("", {
    params: {
      i: movieId,
    },
  });
  return response.data || [];
};
