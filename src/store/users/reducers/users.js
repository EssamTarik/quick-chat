import users from '../../../mocks/user.json';

const initialState = users;

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}