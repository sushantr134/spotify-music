import { GET_ALBUMS_TRACKS } from "../../../actionTypes";

const initialState = {};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS_TRACKS:
      return {
        ...state,
        tracksData: action.payload
      };
    default:
      return state;
  }
};

export default tracksReducer;
