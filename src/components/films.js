import React from 'react';
import {BestFilmsList} from '../data/bestFilms';
import { Link } from 'react-router-dom';

const Films = (props) => {
    let films = BestFilmsList.map((person) => {
        return (
            <div className="actor-container">
                <a>
                    <div className="actor-image" style={{ backgroundImage: "url(" + person.img_src + ")" }}></div>
                </a>
                <h3>{person.name}</h3>
            </div>
        );
    });
    return (
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div>
            <h2>{props.title}</h2>
            <div className="container">
                {films}
            </div>
        </div>
    );
    };

export default Films;