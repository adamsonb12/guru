import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  PASSWORD_CONFIRM_CHANGED,
  SIGN_UP_USER,
  GET_DEFAULT_ROOMS,
  SELECT_DETAILS,
  TASK_TOGGLE,
  ADD_ROOM,
  REMOVE_ROOM
} from './Types';

// Login and Sign Up Actions

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const passwordConfirmChanged = (text) => {
  return {
    type: PASSWORD_CONFIRM_CHANGED,
    payload: text
  };
};

export const firstNameChanged = (text) => {
  return {
    type: FIRST_NAME_CHANGED,
    payload: text
  };
};

export const lastNameChanged = (text) => {
  return {
    type: LAST_NAME_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => { loginUserSuccess(dispatch, user) })
    .catch(() => { loginUserFail(dispatch) });
  };
};

export const signUpUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGN_UP_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {loginUserSuccess(dispatch, user)})
      .catch(() => {loginUserFail(dispatch)});
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.home();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

// Scheduling Actions

export const addRoom = (room) => {
  return {
    type: ADD_ROOM,
    payload: room
  };
};

export const removeRoom = (room) => {
  return {
    type: REMOVE_ROOM,
    payload: room
  };
};

export const toggleTask = (room, task ) => {
  return {
    type: TASK_TOGGLE,
    payload: { room, task }
  };
};

export const selectDetails = (room) => {
  return {
    type: SELECT_DETAILS,
    payload: room
  };
};
