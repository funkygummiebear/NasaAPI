import React, {Component} from "react";
import ReactDom from "react-dom/client";
import AppContainer from "/containers/AppContainer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import XkcdPastContainer from "./containers/xkcd/XkcdPastContainer";
import XkcdCurrentContainer from "./containers/xkcd/XkcdCurrentContainer";
import XkcdArrayRespEx from "./containers/xkcd/XkcdArrayRespEx";
import NasaSingleImage from "./containers/nasa/NasaSingleImage";
import NasaNumberImage from "./containers/nasa/NasaNumberImage";
import NasaMultiDate from "./containers/nasa/NasaMultiDate";

const router = createBrowserRouter([
    {
        path:"/",
        element:<AppContainer />,
        children: [
            {
                index: true,
                element: <div> Hello and Welcome to NASA Astronomy Picture of the Day by Heather Smith </div>
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
            },
            {
                path:"single",
                element:<NasaSingleImage />
            },
            {
                path:"number",
                element:<NasaNumberImage />
            },
            {
                path:"multi",
                element:<NasaMultiDate />
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

