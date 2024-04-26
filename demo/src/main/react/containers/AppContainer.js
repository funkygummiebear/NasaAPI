import React, {useEffect, useState} from "react";
import axios from 'axios';
import Nav from "../components/nav/Nav";
import {Outlet} from "react-router-dom";
import {useStore} from "../resources/store";

const AppContainer = (props) => {
    const nasaSingleImage = useStore((state) => state.nasaSingleImage)
    const fetchCurrentImage= useStore((state) => state.fetchCurrentImage)
    console.log(nasaSingleImage)
    useEffect(() => {
        fetchCurrentImage()
    },[])
    return(
        <>
            <Nav />
            <Outlet />
        </>
    )
}
export default AppContainer
