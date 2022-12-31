import API from "../../utils/API";
import { setError } from "../error-handling";

// Auth actions types

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const LOGOUT = "LOGOUT";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const AUTH_ERROR = "AUTH_ERROR";
const LOADING = "LOADING";

//initial state 
const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    currentUser: null,
    loading: false
}


// Auth action creators
export const registerUser = (data) => async dispatch => {
    dispatch({
        type:LOADING
    })

    try {
        // send request to server side to register user
        const response = await API.register(data);
        // dispatch to reducer
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        console.log("regester failed\n",err.response.data);

        dispatch(setError(err.response.data));

        dispatch({
            type: AUTH_ERROR
        });
    };
};

export const loginUser = (data) => async dispatch => {
    dispatch({
        type:LOADING
    });

    try {
        const response = await API.login(data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });

    } catch (err) {
        console.log("login failed\n", err.response.data);

        dispatch(setError(err.response.data));
        
        dispatch({
            type: AUTH_ERROR
        });
    }
}

export const loadUser = () => async (dispatch, getState) => {
    dispatch({
        type:LOADING
    });

    try {
    const headers = getTokenInfo(getState);
    const user = await API.loadUser(headers);
    dispatch({
        type: LOAD_USER_SUCCESS,
        payload: user.data
    })
    } catch (err) {
        console.log("load user failed\n", err.response.data);
        dispatch({
            type: AUTH_ERROR
        });
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
        case LOADING:
            return{
                ...state,
                loading:true
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                currentUser: { email: action.payload.email },
                isAuthenticated: true,
                loading: false
            };
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: action.payload,
                loading: false
            }
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                currentUser: null,
                loading: false
            }        
        default:
            return state
    }
}

export default reducer;