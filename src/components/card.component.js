import React from 'react';

export const Card = props => (
        <div>
          <div className="card text-center">
              <img alt="pokemon"  width="120px" className="card-img-top  img-fluid" src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}/>       
            <div className="card-block">
              <h2>{props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}</h2>
          </div>      
          </div>
        </div>
);
