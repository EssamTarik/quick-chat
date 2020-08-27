import { SET_ACTIVE_USER } from "../types";

export default (user) => ({
  type: SET_ACTIVE_USER,
  payload: user
})