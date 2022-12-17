// actions types
const GET_ERRORS = "GET_ERRORS";
const CLEAR_ERRORS = "CLEAR_ERRORS";

// actions creators
export const getErrors = (errorData) => {
    return {
        type: GET_ERRORS,
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
        case GET_ERRORS:
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