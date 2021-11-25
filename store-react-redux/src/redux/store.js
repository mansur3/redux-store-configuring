import {createStore, combineReducers, applyMiddleware, compose} from "redux";

import {TodoReducer} from "./TodoStore/reducer.js";
import {reducer} from "./LoginStore/reducer.js";
const rootReducer = combineReducers({
    todos : TodoReducer,
    auth : reducer
})

const logger1 = (state) => (next) => (action) => {
    console.log("dispatching the action :" , action);
    return next(action);
}

const logger2 = (state) => (next) => (action) => {
    console.log("dispatching the action: ", action);
    // const returnValue = next(action);
    return next(action);
    
}
// console.log("State after action is", store.getState()); 

export const store = createStore(rootReducer, compose(applyMiddleware(logger1, logger2), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) );
// console.log(store.getState());