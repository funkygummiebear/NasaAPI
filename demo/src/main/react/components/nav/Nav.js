import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Nav = () => {
    const nav = useNavigate()
    return(
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={(e) => {e.preventDefault(); nav("/")}} href="/">
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
                                <a className="nav-link active" onClick={(e) => {e.preventDefault(); nav("/single")}} href="single">Nasa Single Image</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={(e) => {e.preventDefault(); nav("/number")}} href="number">Nasa Number Image</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={(e) => {e.preventDefault(); nav("/multi")}} href="multi">Nasa Multi Image</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
export default Nav