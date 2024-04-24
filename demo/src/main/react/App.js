import React, {Component} from "react";
import ReactDom from "react-dom/client";
import AppContainer from "/containers/AppContainer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import XkcdPastContainer from "./containers/xkcd/XkcdPastContainer";
import XkcdCurrentContainer from "./containers/xkcd/XkcdCurrentContainer";
import XkcdArrayRespEx from "./containers/xkcd/XkcdArrayRespEx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<AppContainer />,
        children: [
            {
                index: true,
                element: <div> Empty Index </div>
            },
            {
                path:"currentxkcdcomic",
                element:<XkcdCurrentContainer />
            },
            {
                path:"pastxkcdcomic",
                element:<XkcdPastContainer />
            },
            {
                path:"example",
                element:<XkcdArrayRespEx />
            }
            // One Nasa API
        ]
    },

])

ReactDom.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

