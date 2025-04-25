import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([

    {
        path: "/", element: <Layout />, children: [
            { index: true, element: <HomePage /> },
        ],
    },
    { path: "*", element: <NotFound /> },
]);