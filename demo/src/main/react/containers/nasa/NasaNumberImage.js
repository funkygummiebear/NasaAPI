import React, {useEffect, useState} from "react";
import axios from 'axios';
import Nav from "../../components/nav/Nav";


const NasaNumberImage = (params) => {
    const {name, color, object, count, increment} = params
    const [count2, setCount2] = useState(0);
    const [nasaPast, setNasaPast] = useState({});
    const [userDefComicNum, setUserDefComicNum] = useState('')

    const fetchPastComic = (pastNum) => {
        //const defaultNum = xkcdCurrent xkcdCurrent.num ? xkcdCurrent.num : 2500;
        const defaultNum = 10
        const count = pastNum || userDefComicNum ? pastNum || userDefComicNum : Math.floor(Math.random() * defaultNum);
        axios.get(`/numbernasaimage?count=${count}`)
            .then(function (response) {
                setNasaPast(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return(
        <>
            <div>
                <button type="button" className="btn btn-primary" onClick={() => fetchPastComic()}>Get Random Image</button>
            </div>
            <div>
                <input type="text" value={userDefComicNum} onChange={(e) => setUserDefComicNum(e.target.value)} placeholder="Enter in desired NASA image number"/>
                <button disabled={userDefComicNum ? false : true} type="button" className="btn btn-info" onClick={() => fetchPastComic(userDefComicNum)}>Get User Defined Image</button>
            </div>
            <h1>
                {nasaPast.title}
            </h1>
            <div>
                {nasaPast &&
                    <img src={nasaPast.url} alt={nasaPast.img ? nasaPast.img : "No NASA Image"}/>
                }
            </div>
        </>
    )
}
export default NasaNumberImage
