import React, {useEffect, useState} from "react";
import axios from 'axios';
import Nav from "../../components/nav/Nav";
import {useStore} from "../../resources/store.js"

const NasaSingleImage = () => {
    const nasaCurrent = useStore((state) => state.nasaSingleImage);

        return(
            <>
                <div>
                    <h1>{nasaCurrent.title}</h1>
                </div>
                <div>
                    <img src={nasaCurrent.url} alt={nasaCurrent.hdurl}/>
                </div>
            </>
        )
}
export default NasaSingleImage