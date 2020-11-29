import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../actions/pokemonActions";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemon.data);
  const loading = useSelector((state) => state.pokemon.loading);
  const error = useSelector((state) => state.pokemon.error);
  const pokeData = pokemonState[pokemonName];
  console.log(props);
  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, [pokemonName]);

  return (
    <div className="poke">
      {loading && <p> loading ......</p>}
      {Object.keys(pokemonState).length > 0 ? (
        <div className="pokemon-wrapper">
          <div className="item">
            <h1>sprites</h1>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>

          <div className="item">
            <h1>stats</h1>
            {pokeData.stats.map((el) => {
              return (
                <p>
                  {el.stat.name}
                  {el.base_stat}
                </p>
              );
            })}
          </div>

          <div className="item">
            <h1>ability</h1>
            {pokeData.abilities.map((el) => {
              return <p>{el.ability.name}</p>;
            })}
          </div>
        </div>
      ) : (
        <p>no users available</p>
      )}

      {error && !loading && <p>{error}</p>}
    </div>
  );
};

export default Pokemon;
