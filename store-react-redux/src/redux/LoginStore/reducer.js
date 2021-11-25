import {LOGIN_SUCCESS} from "./actionTypes.js";

function loadData(key) {
    try{
        let data = localStorage.getItem(key) 
        data = JSON.parse(data);
        return data;
    } catch(error) {
        return undefined;
    }
}

const initState = loadData("token") || {isAuth : false, token : ""}


function saveData(key, data="") {
    localStorage.setItem(key, JSON.stringify(data))
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case LOGIN_SUCCESS : 
            saveData("token", payload)
            return {
                ...state,
                token : payload,
                isAuth : true
            }
        default : return {
            ...state
        }
    }
}