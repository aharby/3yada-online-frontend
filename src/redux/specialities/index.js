import { client } from "../../client";

// actions types
const SPECIALITIES_FETHCING = "SPECIALITIES_FETHCING";
const SPECIALITIES_FETCH_SUCESS = "SPECIALITIES_FETCH_SUCCESS";
const SPECIALITIES_ERROR = "SPECIALITIES_ERROR"

// initial state
const initialstate = {
    items:[],
    loading: false,
    failed: false
}

//aciotn creators
export const fetchSpeiclities = () => dispatch => {
    dispatch({
        type:SPECIALITIES_FETHCING
    });

    try {
        const query = `*[_type == "category"]`;
        client.fetch(query).then((data) => {
            dispatch({
                type:SPECIALITIES_FETCH_SUCESS,
                payload:data
            })
          });
    }
    catch (err) {
        dispatch({
            type:SPECIALITIES_ERROR
        })
    }
}

//reducer
const reducer = (state= initialstate, action) => {
    switch(action.type){
        case SPECIALITIES_FETHCING:
            return {
                ...state,
                loading: true
            }
        case SPECIALITIES_FETCH_SUCESS:
            return {
                ...state,
                items: action.payload,
                loading:false
            }
        case SPECIALITIES_ERROR:
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