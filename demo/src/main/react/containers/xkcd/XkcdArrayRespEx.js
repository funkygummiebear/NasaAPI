import React, {useEffect, useState} from "react";
import axios from 'axios';
import Nav from "../../components/nav/Nav";


const XkcdArrayRespEx = () => {

    const mockResp = [
        {"month": "1", "num": 1, "link": "", "year": "2006", "news": "", "safe-title": "Barrel - Part 1", "transcript": "[[A boy sits in a barrel which is floating in an ocean.]] Boy: I wonder where I'll float next? [[The barrel drifts into the distance. Nothing else can be seen.]] {{Alt: Don't we all.}}", "alt": "Don't we all.", "img": "http://imgs.xkcd.com/comics/barrel_cropped_(1).jpg", "title": "Barrel - Part1", "day": "1"},
        {"month": "1", "num": 2, "link": "", "year": "2006", "news": "", "safe-title": "Petit Trees (sketch)", "transcript": "[[Two trees are growing on opposite sides of a sphere.]] {{Alt-title: 'Petit' being a reference to Le Petit Prince, which I only thought about halfway through the sketch}}", "alt": "'Petit' being a reference to Le Petit Prince, which I only thought about halfway through the sketch", "img": "http://imgs.xkcd.com/comics/tree_cropped_(1).jpg", "title": "Petit Trees (sketch)", "day": "1"},
        {"month": "1", "num": 3, "link": "", "year": "2006", "news": "", "safe-title": "Island (sketch)", "transcript": "[[A sketch of an Island]] {{Alt: Hello, island}}", "alt": "Hello, island", "img": "http://imgs.xkcd.com/comics/island_color.jpg", "title": "Island (sketch)", "day": "1"},
        {"month": "1", "num": 3, "link": "", "year": "2006", "news": "", "safe-title": "Island (sketch)", "transcript": "[[A sketch of an Island]] {{Alt: Hello, island}}", "alt": "Hello, island", "img": "http://imgs.xkcd.com/comics/island_color.jpg", "title": "Island (sketch)", "day": "1"},

    ]

    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            { mockResp.map((xkcd, index) => {
                return(
                    <div className="card col" style={{"width": "18rem"}} key={index}>
                        <img src={xkcd.img} className="card-img-top" alt={xkcd.alt}/>
                        <div className="card-body">
                            <h5 className="card-title">{xkcd.title}</h5>
                            <p className="card-text">{xkcd.transcript}</p>
                            <a href={xkcd.img} className="btn btn-primary">See Image</a>
                        </div>
                    </div>
                )
                })}
            // {/*<div>*/}
            // {/*    <h1>{xkcdCurrent.title}</h1>*/}
            // {/*</div>*/}
            // {/*<div>*/}
            // {/*    <img src={xkcdCurrent.img} alt={xkcdCurrent.alt ? xkcdCurrent.alt : "No Xkcd image for today"}/>*/}
            // {/*</div>*/}
            // {/*<div>*/}
            // {/*    <p>*/}
            // {/*        {xkcdCurrent.transcript}*/}
            // {/*    </p>*/}
            // {/*</div>*/}
        </div>
    )
}
export default XkcdArrayRespEx
