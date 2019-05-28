import { GET_ALBUMS_TRACKS } from "../../../actionTypes";
import axios from "axios";

export const getTracks = (albumid, token) => {
  return dispatch => {
    axios
      .get(`https://api.spotify.com/v1/albums/${albumid}/tracks`, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: GET_ALBUMS_TRACKS,
            payload: res.data
          });
        }
      });
  };
};
