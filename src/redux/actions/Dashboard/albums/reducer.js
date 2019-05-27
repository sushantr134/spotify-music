import { GET_ALBUMS_LIST, NOT_FOUND_ERROR } from "../../../actionTypes";

const initialState = {};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS_LIST:
      return {
        ...state,
        albumsData: action.payload
      };
    case NOT_FOUND_ERROR:
      return {
        ...state,
        albumsData: action.payload
      };
    default:
      return state;
  }
};

export default albumReducer;
