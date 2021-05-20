import * as types from "./types";
import axios from "axios";

const initialState = {
  message: "",
  loading: false,
};

export const getAllSessionsRequest = () => ({
  type: types.GET_ALL_SESSIONS_REQUEST,
  payload: {
    loading: true,
    message: "fetching",
  },
});

export const getAllSessionsSuccess = (session) => ({
  type: types.GET_ALL_SESSIONS_SUCCESS,
  payload: { sessions, loading: false, message: "success" },
});

export const getAllSessionsFailure = (error) => ({
  type: types.GET_ALL_SESSIONS_FAILURE,
  payload: { error, loading: false, message: "failure" },
});

export const getAllSessions = () => (dispatch) => {
  dispatch(getAllSessionsRequest());
  return axios
    .get("//API HERE")
    .then((res) => {
      dispatch(getAllSessionsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getAllSessionsFailure(error));
    });
};

export const allSessionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_SESSIONS_REQUEST:
      return { ...state, ...action.payload };
    case types.GET_ALL_SESSIONS_SUCCESS:
      return {
        ...state,
        sessions: action.payload.sessions,
        message: action.payload.message,
        loading: action.payload.loading,
      };
    case types.GET_ALL_SESSIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default allSessionsReducer;
