import * as types from "./types";
import axios from "axios";

const initialState = {
  message: "",
  loading: false,
};

export const getSessionRequest = () => ({
  type: types.GET_SESSION_REQUEST,
  payload: {
    loading: true,
    message: "fetching",
  },
});

export const getSessionSuccess = (session) => ({
  type: types.GET_SESSION_SUCCESS,
  payload: { session, loading: false, message: "success" },
});

export const getSessionFailure = (error) => ({
  type: types.GET_SESSION_FAILURE,
  payload: { error, loading: false, message: "failure" },
});

export const getSession = () => (dispatch) => {
  dispatch(getSessionRequest());
  return axios
    .get("//API HERE")
    .then((res) => {
      dispatch(getSessionSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getSessionFailure(error));
    });
};

export const singleSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SESSION_REQUEST:
      return { ...state, ...action.payload };
    case types.GET_SESSION_SUCCESS:
      return {
        ...state,
        session: action.payload.session,
        message: action.payload.message,
        loading: action.payload.loading,
      };
    case types.GET_SESSION_FAILURE:
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

export default singleSessionReducer;
