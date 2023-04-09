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

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    case ADD_USER_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, payload],
      };
    case UPDATE_USER_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data],
      };
    case DELETE_USER_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case DELETE_USER_SUCCESS:
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
