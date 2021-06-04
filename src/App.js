import React, {Component} from 'react';
import { CardList } from './components/card-list.component';
import { SearchBox } from './components/search-box.component';
import { Environment } from './enviroment';
import { PokemonDetail } from  './components/pokemon-detail.component';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

class App extends Component{
  constructor(){
    super();

    this.state = {
      pokemons: [],
      search:''
    };
  }

  handleChange=(e) => {
    this.setState({search: e.target.value});

    if(this.state.search.length < 3) return

    fetch(`${Environment.baseURL}pokemon?name=${this.state.search}`, {
      headers: new Headers({
        "Access-Control-Allow-Origin": "*"
      })
    })
    .then(response => response.json())
    .then(name => 
      this.setState({pokemons:name})
      );
  };

  render() {
    const {pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

    return(
      
      <div className="App">
        <div className="container">
          <h1>Poke-App</h1>
          <Router>
            <div>
              <SearchBox
                placeholder='Write to a Pokemon' 
                handleChange= {this.handleChange}
              />
              <CardList pokemons={fileteredPokemons}></CardList>
            </div>
            <Switch>
              <Route path="/pokemon-details/:name" children={<PokemonDetail />} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;