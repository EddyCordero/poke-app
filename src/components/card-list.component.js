import React from 'react';

import { Card } from '../components/card.component';
import { PokemonDetail } from "./pokemon-detail.component"
import {
    Link,
  } from "react-router-dom";

export const CardList = props => (
        <div className="card-columns">
            {props.pokemons.map(pokemon =>(
            <Link to={`/pokemon-details/${pokemon.name}`} target="_blank">
                <Card key={pokemon.name} pokemon={pokemon}></Card>
            </Link>
            ))}
        </div>
);