import { ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, GET_TODO_ERROR } from "./actionTypes";


export const addTodoLoading = () => ({type : ADD_TODO_LOADING})
export const addTodoSuccess = (data) => ({type : ADD_TODO_SUCCESS, payload : data});
export const addTodoError = (data) => ({type : ADD_TODO_ERROR, payload: data});


export const getTodoLoading = () => ({type : GET_TODO_LOADING});
export const getTodoSuccess = (data) => ({type : GET_TODO_SUCCESS, payload : data});
export const getTodoError = (data) => ({type : GET_TODO_ERROR, payload: data});