import users from '../../../mocks/user.json';
import { SET_ACTIVE_USER } from '../types';

const initialState = users[0];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return action.payload;
    default:
      return state;
  }
}