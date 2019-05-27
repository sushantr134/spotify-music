import { SEARCH_ARTIST, NOT_FOUND_ERROR } from "../../../actionTypes";

const initialState = {};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        searchResult: action.payload
      };
    case NOT_FOUND_ERROR:
      return {
        ...state,
        searchResult: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
