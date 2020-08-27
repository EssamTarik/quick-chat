import { SEND_MESSAGE } from "../types";

export default (message, to) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    to
  }
})