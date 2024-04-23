import React, {useEffect, useState} from "react";
import axios from 'axios';
import Nav from "../components/nav/Nav";


const AppContainer = (props) => {
    const [count2, setCount2] = useState(0)
    const [xkcdCurrent, setXkcdCurrent] = useState({});
    const [xkcdPast, setXkcdPast] = useState(null);
    const [userDefComicNum, setUserDefComicNum] = useState('')

    useEffect(()=>{
        axios.get('/xkcd/current')
            .then(function (response) {
                setXkcdCurrent(response.data)
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[])

    const fetchPastComic = (pastNum) => {
        const defaultNum = xkcdCurrent.num ? xkcdCurrent.num : 2500;
        const count = pastNum || userDefComicNum ? pastNum || userDefComicNum : Math.floor(Math.random() * defaultNum);
        axios.get(`/xkcd/past/${count}`)
            .then(function (response) {
                setXkcdPast(response.data)
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return(
        <>
            <Nav />
            <h1>Hello, world!</h1>
        </>
    )
}
export default AppContainer
