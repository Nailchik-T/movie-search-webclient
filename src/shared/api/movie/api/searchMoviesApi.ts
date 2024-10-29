import { ISearchResult } from "../model/model.ts";
import { apiClient } from "../../index.ts";

export const searchMoviesApi = async (
  query: string,
): Promise<ISearchResult[]> => {
  const response = await apiClient.get<{ Search: ISearchResult[] }>("", {
    params: {
      s: query,
    },
  });
  return response.data.Search || [];
};
