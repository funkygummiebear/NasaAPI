import React, {Component} from "react";
import ReactDom from "react-dom/client";
import AppContainer from "/containers/AppContainer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import xkcdCurrentContainer from "./containers/xkcd/XkcdCurrentContainer";

const router = createBrowserRouter([
    {
        path:"/",
        element:<AppContainer />
    },
    {
        path:"/currentxkcdcomic",
        element:<xkcdCurrentContainer />
    }
])

ReactDom.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

