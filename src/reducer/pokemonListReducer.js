const initialState = {
  loading: false,
  data: [],
  error: "",
  count: 0,
};

const pokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,
        error: "unable to get pokemion",
      };

    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        error: "",
        count: action.payload.count,
      };

    default:
      return state;
  }
};

export default pokemonListReducer;
