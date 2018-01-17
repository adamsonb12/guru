import {
  EMAIL_CHANGED
} from '../actions/Types';

const INITIAL_STATE = {
  email: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};