import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error"; 
import Movie from "./pages/Movie";
import TvSeries from "./pages/TvSeries";
import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home", 
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movie",
    element: <Movie />,
    errorElement: <Error />,
  },
  {
    path: "/tv-series",
    element: <TvSeries />,
    errorElement: <Error />,
  },
  {
    path: "/bookmarks",
    element: <Bookmark />,
    errorElement: <Error />,
  },
]);
