import {
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/Types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  user: null,
  error: false,
  errorMessage: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true , error: false, errorMessage: ''};
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: true, errorMessage: 'Invalid email or password' , password: '' };
    default:
      return state;
  }
};
