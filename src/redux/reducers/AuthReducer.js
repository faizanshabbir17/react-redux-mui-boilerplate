import { LOGIN_USER, LOGOUT_USER } from "../../constants/ActionTypes";

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log("in reducer");
      return { ...state, uid: action.payload };
    case LOGOUT_USER:
      return {};
    default:
      return { ...state };
  }
};
