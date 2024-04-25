import React, {useEffect, useState} from "react";
import axios from 'axios';
import Nav from "../../components/nav/Nav";


const NasaNumberImage = () => {
    const [nasaPast, setNasaPast] = useState({});
    const [userDefNasaNum, setUserDefNasaNum] = useState('')

    const fetchPastNasa = (pastNum) => {
        const defaultNum = 2500
        const count = pastNum || userDefNasaNum ? pastNum || userDefNasaNum : Math.floor(Math.random() * defaultNum);
        axios.get(`/numbernasaimage`)
            .then(function (response) {
                setNasaPast(response.data)
            })
            .catch(async function (error) {
                await console.log(error);
            })
    }
if(!nasaPast) return <div />;
    return(
        <>
            <div>
                <input type="text" value={userDefNasaNum} onChange={(e) => setUserDefNasaNum(e.target.value)} placeholder="Enter in desired NASA image number"/>
                <button disabled={userDefNasaNum ? false : true} type="button" className="btn btn-info" onClick={() => fetchPastNasa(userDefNasaNum)}>Get Image</button>
            </div>
            <h1>
                {nasaPast.title}
            </h1>
            <div>
                {nasaPast &&
                    <img src={nasaPast.url} alt={nasaPast.hdurl}/>
                }
            </div>
        </>
    )
}
export default NasaNumberImage
