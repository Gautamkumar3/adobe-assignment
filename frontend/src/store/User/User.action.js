import axios from "axios";
import {
  ADD_USER_ERROR,
  ADD_USER_LOADING,
  ADD_USER_SUCCESS,
  DELETE_USER_ERROR,
  DELETE_USER_LOADING,
  DELETE_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_LOADING,
  UPDATE_USER_SUCCESS,
} from "./User.types";

// const api = "http://localhost:8080";
const api = "https://adobe-project-api-production.up.railway.app";

export const getUsersData = () => async (dispatch) => {
  dispatch({ type: GET_USER_LOADING });
  try {
    const res = await axios.get(`${api}/allusers`);
    dispatch({ type: GET_USER_SUCCESS, payload: res.data.data });
    return res.data;
  } catch (er) {
    dispatch({ type: GET_USER_ERROR, payload: er });
    return er;
  }
};

export const createUser = (data) => async (dispatch) => {
  dispatch({ type: ADD_USER_LOADING });
  try {
    let res = await axios.post(`${api}/users`, data);
    dispatch({ type: ADD_USER_SUCCESS, payload: res.data.data });
    return res.data;
  } catch (er) {
    dispatch({ type: ADD_USER_ERROR });
    return er;
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: DELETE_USER_LOADING });
  try {
    let res = await axios.delete(`${api}/users/${id}`);
    dispatch({ type: DELETE_USER_SUCCESS, payload: res.data.data });
    return res.data;
  } catch (er) {
    dispatch({ type: DELETE_USER_ERROR });
    return er;
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_LOADING });
  try {
    let res = await axios.put(`${api}/users/${id}`, data);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data.data });
    return res.data;
  } catch (er) {
    dispatch({ type: UPDATE_USER_ERROR });
    return er;
  }
};
