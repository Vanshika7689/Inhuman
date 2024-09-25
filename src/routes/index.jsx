import React from "react";
import { Route } from "react-router-dom";

const generateRoute = (routes) => {
    const newRoutes = routes.map((route, index) => {
        console.log(route, "route")
        return (<Route path={route.path} element={route.element} key={index} />)
    })

    return newRoutes;
};

export const generateRoutes = (routes) => generateRoute(routes);