import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import SpalshFour from "pages/SpalshFour";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "spalshfour",
      element: <SpalshFour />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
