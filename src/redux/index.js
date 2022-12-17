import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import errorReducer from "./error-handling";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    form: formReducer
})

// redux configuration of the store with the reducers, thunk (middleware) and chrome web tools.
export const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a));


