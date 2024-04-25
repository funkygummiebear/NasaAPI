import React, {useEffect, useState} from "react";
import axios from 'axios';
import Nav from "../../components/nav/Nav";


const NasaSingleImage = () => {
    const [nasaCurrent, setNasaCurrent] = useState({});

    useEffect(()=>{
        axios.get(`/singlenasaimage`)
            .then(function (response) {
                setNasaCurrent(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    },[])

    return(
        <>
            <div>
                <h1>{nasaCurrent.date}</h1>
            </div>
            <div>
                <p>
                    {nasaCurrent.title}
                </p>
            </div>
        </>
    )
}
export default NasaSingleImage