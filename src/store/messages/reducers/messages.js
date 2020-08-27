import { SEND_MESSAGE } from "../types";

const initialState = {};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SEND_MESSAGE:
      const {
        to: { id: recepientId },
        message
      } = action.payload;
      const recepientMessages = state[recepientId] || [];

      return {
        ...state,
        [recepientId]: [...recepientMessages, { message, date: new Date() }]
      }
    default:
      return state;
  }
}