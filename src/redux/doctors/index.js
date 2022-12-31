import { client } from "../../client";

// actions types
const DOCTORS_FETHCING = "DOCTORS_FETHCING";
const DOCTORS_FETCH_SUCESS = "DOCTORS_FETCH_SUCCESS";
const DOCTORS_ERROR = "DOCTORS_ERROR"

// initial state
const initialstate = {
    items:[],
    loading: false,
    failed: false
}

//aciotn creators
export const fetchDoctors = () => dispatch => {
    dispatch({
        type:DOCTORS_FETHCING
    });

    try {
        const query = `*[_type == "doctor"]`;
        client.fetch(query).then((data) => {
            dispatch({
                type:DOCTORS_FETCH_SUCESS,
                payload:data
            })
          });
    }
    catch (err) {
        dispatch({
            type:DOCTORS_ERROR
        })
    }
}

//reducer
const reducer = (state= initialstate, action) => {
    switch(action.type){
        case DOCTORS_FETHCING:
            return {
                ...state,
                loading: true
            }
        case DOCTORS_FETCH_SUCESS:
            return {
                ...state,
                items: action.payload,
                loading:false
            }
        case DOCTORS_ERROR:
            return{
                ...state,
                items:[],
                loading:false,
                failed:true
            }
        default:
            return state;
    }
}

export default reducer;