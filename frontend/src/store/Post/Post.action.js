import axios from "axios";
import {
  ADD_POST_ERROR,
  ADD_POST_LOADING,
  ADD_POST_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  UPDATE_POST_ERROR,
  UPDATE_POST_LOADING,
  UPDATE_POST_SUCCESS,
} from "./Post.types";


const api = "http://localhost:8080";

export const getPostsData = () => async (dispatch) => {
  dispatch({ type: GET_POST_LOADING });
  try {
    const res = await axios.get(`${api}/totalposts`);
    dispatch({ type: GET_POST_SUCCESS, payload: res.data.data });
    return res.data;
  } catch (er) {
    dispatch({ type: GET_POST_ERROR, payload: er });
    return er;
  }
};
