import { useRoutes } from "react-router-dom";
import { AlbumPagePhotos } from "../pages/AlbumPagePhotos";
import { MainPage } from "../pages/MainPage";
import { PhotoItemPage } from "../pages/PhotoItemPage";
import { NotFound } from "../pages/NotFound";

export const Routers = () => {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/album/:id/photos", element: <AlbumPagePhotos /> },
    { path: "/photos/:id", element: <PhotoItemPage /> },
    { path: "*", element: <NotFound /> },
]);

  return routes;
};
