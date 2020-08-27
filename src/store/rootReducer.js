import { combineReducers } from "redux";
import { activeUser, users } from './users/reducers';
import { messages } from './messages/reducers';

const rootReducer = combineReducers({
  activeUser,
  users,
  messages
});

export default rootReducer;
