import React, {useEffect, useState} from "react";
import axios from 'axios';
import Nav from "../../components/nav/Nav";


const XkcdCurrentContainer = () => {
    const [xkcdCurrent, setXkcdCurrent] = useState({});

    useEffect(()=>{
        axios.get(`/xkcd/current`)
            .then(function (response) {
                setXkcdCurrent(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    },[])

    return(
        <>
            <div>
                <h1>{xkcdCurrent.title}</h1>
            </div>
            <div>
                <img src={xkcdCurrent.img} alt={xkcdCurrent.alt ? xkcdCurrent.alt : "No Xkcd image for today"}/>
            </div>
            <div>
                <p>
                    {xkcdCurrent.transcript}
                </p>
            </div>
        </>
    )
}
export default XkcdCurrentContainer