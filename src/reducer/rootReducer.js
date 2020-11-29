import { combineReducers } from "redux";
import pokemonListReducer from "./pokemonListReducer";
import multipleReducer from "./pokemonMultipleReducer";

const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  pokemon: multipleReducer,
});

export default rootReducer;
