import {
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  SIGN_UP_USER,
  SIGN_UP_USER_FAIL,
  PASSWORD_CONFIRM_CHANGED
} from '../actions/Types';

const INITIAL_STATE = {
  email: '',
  password: '',
  passwordConfirm: '',
  loading: false,
  user: null,
  error: false,
  errorMessage: '',
  firstName: '',
  lastName: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case PASSWORD_CONFIRM_CHANGED:
      return { ...state, passwordConfirm: action.payload };
    case FIRST_NAME_CHANGED:
      return { ...state, firstName: action.payload };
    case LAST_NAME_CHANGED:
      return { ...state, lastName: action.payload };
    case LOGIN_USER || SIGN_UP_USER:
      return { ...state, loading: true , error: false, errorMessage: ''};
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: true, errorMessage: 'Invalid email or password' , password: '', passwordConfirm: '' };
    case SIGN_UP_USER_FAIL:
      return { ...state, loading: false, error: true, errorMessage: 'Error: Invalid Inputs' , password: '', passwordConfirm: '' };
    default:
      return state;
  }
};
