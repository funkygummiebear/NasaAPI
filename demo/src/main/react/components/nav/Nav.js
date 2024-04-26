import React, {useEffect, useState} from "react";
import axios from 'axios';


const Nav = (props) => {

    return(
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Nasa API
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="currentxkcdcomic">Current
                                    Comic</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="pastxkcdcomic">Past Comic</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="example">Example</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="single">Nasa Single Image</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="number">Nasa Number Image</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="multi">Nasa Multi Image</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
export default Nav