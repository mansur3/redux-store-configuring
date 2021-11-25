// import {addTodoLoading, addTodoSuccess, addTodoError, getTodoLoading, getTodoSuccess, getTodoError} from "./action.js";
import {  ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR,  GET_TODO_LOADING, GET_TODO_SUCCESS, GET_TODO_ERROR} from "./actionTypes.js"

const initState =   {
    
    todos : {
        loading : false,
        data : [],
        error : false
    }
    
}

function loadData(key) {
    try {
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data
    } catch(error) {
        return undefined;
    }
}

function saveData(key, data = "") {
    localStorage.setItem(key, JSON.stringify(data))
}

export const TodoReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case  ADD_TODO_LOADING : 

            return {
                ...state,
                todos : {
                    ...state.todos,
                    loading: true
                }
            }
        case ADD_TODO_SUCCESS : 
            // saveData("state" , payload)
            return {
                ...state,
                todos : {
                    ...state.todos,
                    loading : false,
                    data : [...state.todos.data, payload]
                   
                }

            }
        case ADD_TODO_ERROR : 
            
            return {
                ...state, 
                todos : {
                    ...state.todos, 
                    loading : false,
                    error : payload
                }
            }
         case GET_TODO_LOADING : 
            return {
                ...state,
                todos : {
                    ...state.todos, 
                    loading : true
                }
            }
        case GET_TODO_SUCCESS : 
            // loadData("state");
            return {
                ...state,
                todos : {
                    ...state.todos,
                    loading : false,
                    data : payload

                }

            }
        case GET_TODO_ERROR : 
            return {
                ...state, 
                todos : {
                    ...state.todos, 
                    loading : false,
                    error : payload
                }
            }
        default :  
            return {...state}
        
    }
}