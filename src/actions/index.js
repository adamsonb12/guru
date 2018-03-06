import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  PASSWORD_CONFIRM_CHANGED,
  SIGN_UP_USER,
  GET_DEFAULT_ROOMS,
  SELECT_DETAILS,
  TASK_TOGGLE,
  ADD_ROOM,
  REMOVE_ROOM,
  ADDRESS_CHANGED,
  PHONE_CHANGED,
  CONTACT_NAME_CHANGED,
  DATE_CHANGED,
  CONFIRM_APPOINTMENT
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

export const logout = (user) => {
  return {
    type: LOGOUT_USER,
    payload: user
  };
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

export const toggleTask = (room, task, index ) => {
  return {
    type: TASK_TOGGLE,
    payload: { room, task, index }
  };
};

export const selectDetails = (room) => {
  return {
    type: SELECT_DETAILS,
    payload: room
  };
};

export const addressChanged = (text) => {
  return {
    type: ADDRESS_CHANGED,
    payload: text
  };
};

export const phoneChanged = (text) => {
  return {
    type: PHONE_CHANGED,
    payload: text
  };
};

export const contactNameChanged = (text) => {
  return {
    type: CONTACT_NAME_CHANGED,
    payload: text
  };
};

export const dateChanged = (date) => {
  return {
    type: DATE_CHANGED,
    payload: date
  };
};

export const confirmedAppointment = (item) => {
  return {
    type: CONFIRM_APPOINTMENT,
    payload: item
  };
};
