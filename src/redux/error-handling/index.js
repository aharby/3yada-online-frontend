// actions types
const SET_ERROR_MSG = "SET_ERROR_MSG";
const CLEAR_ERRORS = "CLEAR_ERRORS";

// actions creators
export const setError = (errorData) => {
    return {
        type: SET_ERROR_MSG,
        payload: errorData
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

//initial state
const initialState = {
    message: ""
};

// reducer 
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ERROR_MSG:
            return {
                ...state,
                message: action.payload.message
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                message: ""
            };
        default:
            return state
    };
};

export default reducer;