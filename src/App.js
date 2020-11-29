import "./App.css";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import PokemonList from "./containers/pokemonList";
import Pokemon from "./containers/pokemon";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">search</NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={PokemonList} />
        <Route path="/pokemon/:pokemon" exact component={Pokemon} />
        <Redirect to="/ " />
      </Switch>
    </div>
  );
}

export default App;
