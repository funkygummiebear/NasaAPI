import React, {useEffect, useState} from "react";
import axios from 'axios';


const AppContainer = (props) => {
    const {name, color, object, count, increment} = props
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
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {name} {count2}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => setCount2(count2 + 1)}>{count2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => increment()}>{count}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1>Hello, world!</h1>
            <img src={xkcdCurrent.img} alt={xkcdCurrent.alt ? xkcdCurrent.alt : "No Xkcd image for today"}/>
            <div className="mb-3">
                <label className="form-label">Email address
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            { xkcdPast &&
                <img src={xkcdPast.img} alt={xkcdPast.alt ? xkcdPast.alt : "No Xkcd past image for today"}/>
            }
            <div>
            <button type="button" className="btn" onClick={() => fetchPastComic()}>Get Random Comic</button>
            </div>
            <div>
                <input type="text" value={userDefComicNum} onChange={(e) => setUserDefComicNum(e.target.value)}
                       placeholder="Enter in desired comic number"/>
                <button type="button" className="btn" onClick={() => fetchPastComic(userDefComicNum)}>Get User Defined
                    Comic
                </button>
                <button disabled={userDefComicNum ? false : true} type="button" className="btn" onClick={() => fetchPastComic(userDefComicNum)}>Get User Defined with state data
                    Comic
                </button>

            </div>
        </>
    )
}
export default AppContainer