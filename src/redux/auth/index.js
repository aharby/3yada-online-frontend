import API from "../../utils/API";
import { getErrors } from "../error-handling";

// Auth actions types

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const REGISTER_FAILURE = "REGISTER_FAILURE";
const LOGOUT = "LOGOUT";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const AUTH_ERROR = "AUTH_ERROR";

//initial state 
const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    currentUser: null
}


// Auth action creators
export const registerUser = (data) => async dispatch => {
    try {
        // send request to server side to register user
        const response = await API.register(data);
        // dispatch to reducer
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch(getErrors(err.response.data))
        dispatch({
            type: REGISTER_FAILURE
        });
    };
};

export const loginUser = (data) => async dispatch => {
    try {
        const response = await API.login(data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });

    } catch (err) {
        // dispatch get error Action
        dispatch(getErrors(err.response.data))
        // dispatch login fail
        dispatch({
            type: LOGIN_FAILURE
        });
    }
}

export const loadUser = () => async (dispatch, getState) => {
    
    dispatch({type: LOAD_USER_FAILURE})
    try {
        const headers = getTokenInfo(getState);
        const user = await API.loadUser(headers);
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: user.data
        })

    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// function to configure token to be used on any server request using the server side "auth" middleware
export const getTokenInfo = getState => {

    const token = getState().auth.token;
    const headerConfig = {
        headers: {
            "Content-type": "application/json"
        }
    }
    if (token) {
        headerConfig.headers["token"] = token
    }

    return headerConfig
}
// Action to logout user
export const LogoutUser = () => {
    return {
        type: LOGOUT
    }
}


// reducer to handle auth Actions
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                currentUser: { email: action.payload.email },
                isAuthenticated: true
            };
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case LOAD_USER_FAILURE:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                currentUser: null
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default reducer;