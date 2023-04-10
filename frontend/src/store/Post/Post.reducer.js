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

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    case GET_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    case ADD_POST_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    case ADD_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, payload],
      };
    case UPDATE_POST_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    case UPDATE_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data],
      };
    case DELETE_POST_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    case DELETE_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data],
      };
    default: {
      return state;
    }
  }
};
