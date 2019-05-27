import { USER_AUTH_LOGIN_TOKEN } from "../../actionTypes";

export const userAuthToken = token => {
  return dispatch => {
    dispatch({
      type: USER_AUTH_LOGIN_TOKEN,
      payload: token
    });
  };
};
