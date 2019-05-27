import { GET_ALBUMS_LIST, NOT_FOUND_ERROR } from "../../../actionTypes";
import axios from "axios";

export const getArtistAlbum = (artistID, token) => {
  return dispatch => {
    axios
      .get(`https://api.spotify.com/v1/artists/${artistID}/albums`, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(res => {
        dispatch({
          type: GET_ALBUMS_LIST,
          payload: res
        });
      });
  };
};
