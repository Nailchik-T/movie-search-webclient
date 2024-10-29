import AppLayout from "../../shared/components/Layout/Layout.tsx";
import { Route, Routes } from "react-router-dom";
import { ROUTER_PATHS } from "./paths.ts";
import HomePage from "../../pages/HomePage/HomePage.tsx";
import MovieDetailPage from "../../pages/MovieDetailPage/MovieDetailPage.tsx";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage.tsx";

export const Router = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={ROUTER_PATHS.HOME} element={<HomePage />} />
        <Route path={ROUTER_PATHS.MOVIE_DETAIL} element={<MovieDetailPage />} />
        <Route path={ROUTER_PATHS.FAVORITES} element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};
