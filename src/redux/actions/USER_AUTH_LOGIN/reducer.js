import { USER_AUTH_LOGIN_TOKEN } from "../../actionTypes";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_LOGIN_TOKEN:
      return {
        ...state,
        userToken: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
