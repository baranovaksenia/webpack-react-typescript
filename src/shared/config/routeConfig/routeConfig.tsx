import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import React from 'react';
import { RouteProps } from 'react-router-dom';

// Define an enumeration 'AppRoutes' to represent different route names.
export enum AppRoutes {
MAIN = 'main',
ABOUT = 'about',
NOT_FOUND = 'not_found',
}

// Define the route paths for each route name
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

// Define the components for each route name.
export const RouteComponent:
Record<AppRoutes, React.ReactNode> = {
    [AppRoutes.MAIN]: <MainPage />,
    [AppRoutes.ABOUT]: <AboutPage />,
    [AppRoutes.NOT_FOUND]: <NotFoundPage />,
};

// Define the route configuration by combining route paths and components.
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: RouteComponent[AppRoutes.MAIN],
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: RouteComponent[AppRoutes.ABOUT],
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: RouteComponent[AppRoutes.NOT_FOUND],
    },
};
