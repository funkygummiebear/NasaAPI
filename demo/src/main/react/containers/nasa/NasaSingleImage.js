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


    if (!nasaCurrent) return <div />;
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