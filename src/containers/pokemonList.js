import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pokemonList.data);
  const loading = useSelector((state) => state.pokemonList.loading);
  const error = useSelector((state) => state.pokemonList.error);
  const count = useSelector((state) => state.pokemonList.count);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page) => {
    dispatch(getPokemonList(page));
  };

  return (
    <>
      <div className="search-wrapper">
        <p>search :</p>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          search
        </button>
      </div>
      {loading && <p> loading ......</p>}
      <div className="list-wrapper">
        {data.length > 0 &&
          data.map((pokemon, i) => {
            return (
              <div key={i} className="pokemon-item">
                <p>{pokemon.name}</p>
                <Link to={`/pokemon/${pokemon.name}`}>View</Link>
              </div>
            );
          })}
      </div>
      {data.length > 0 && (
        <ReactPaginate
          pageCount={Math.ceil(count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName="pagination"
        />
      )}
      {data.length === 0 && <p>no users available</p>}
      {error && !loading && <p>{error}</p>}
    </>
  );
};
export default PokemonList;
