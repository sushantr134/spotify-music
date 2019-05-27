import { SEARCH_ARTIST, NOT_FOUND_ERROR } from "../../../actionTypes";

import axios from "axios";

export const searchArtist = (searchQuery, token) => {
  return dispatch => {
    axios
      .get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: SEARCH_ARTIST,
            payload: res.data.artists
          });
        } else {
          dispatch({
            type: NOT_FOUND_ERROR,
            payload: null
          });
        }
      });
  };
};
