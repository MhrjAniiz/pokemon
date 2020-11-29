const initialState = {
  loading: false,
  data: {},
  error: "",
};

const multipleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMON_MULTIPLE_LOADING":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "POKEMON_MULTIPLE_FAIL":
      return {
        ...state,
        loading: false,
        error: "unable to find the pokemon",
      };
    case "POKEMON_MULTIPLE_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };

    default:
      return state;
  }
};

export default multipleReducer;
