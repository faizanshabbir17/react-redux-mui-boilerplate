import { LOGIN_USER, LOGOUT_USER } from "../../constants/ActionTypes";

export const loginUser = (uid) => (
  console.log("hello"),
  {
    type: LOGIN_USER,
    payload: { uid },
  }
);

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
