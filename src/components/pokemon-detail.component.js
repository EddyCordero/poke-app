import React, { useState, setState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Environment } from "../enviroment";

 export const PokemonDetail = (props) => {
    
    const { name } = useParams();
    const [ pokemon, setPokemon ] = useState({});


    useEffect(() => { 
    fetch(`${Environment.baseURL}pokemon/getByName?name=${name}`, {
        headers: new Headers({
            "Access-Control-Allow-Origin": "*"
        })
        })
        .then(response => response.json())
        .then(name => 
            setPokemon(name)
        );
    });

    return (<div className="col-lg-6 offset-md-4" style={{marginBottom: '30px'}}>
                <div className="card text-center">
                        <img alt="pokemon"  width="354px" className="card-img-top  img-fluid" src={`https://img.pokemondb.net/artwork/large/${pokemon.name && pokemon.name}.jpg`}/>       
                        <div className="card-block">
                            <h3 className="card-title"> { <h2>{pokemon.name && pokemon.name.toUpperCase()}</h2> } </h3>
                        </div> 
                        <ul className="list-inline">
                            <li className="list-inline-item"><strong>{pokemon.weight}</strong> <br/>weight</li>
                            <li className="list-inline-item"><strong>{pokemon.height}</strong> <br/>height</li>
                            <li className="list-inline-item"><strong>{pokemon.base_experience}</strong> <br/>base experience</li>
                        </ul>
                        <a  className = "btn btn-primary" href={ `${Environment.baseURL}pokemon/DownloadFile?name=${name}` } download>Click to download More Info</a>
                </div>
            </div>);
 }


export default PokemonDetail;