import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import axios from "axios";
import {addTodoLoading, addTodoSuccess, addTodoError, getTodoLoading, getTodoSuccess, getTodoError} from "../redux/TodoStore/action.js";




const Todo = () => {

    const dispatch = useDispatch();

    const storeState = useSelector((store) => store);
    const {loading, data, error} = storeState.todos.todos;
    const {isAuth} = storeState.auth;
    
    const getData = async () => {
        dispatch(getTodoLoading());
        try{
            let {data} = await axios.get("http://localhost:3001/todos");
            dispatch(getTodoSuccess(data))
            // console.log(data);
        } catch(error) {
            dispatch(getTodoError(error))
        }
    }

    useEffect(() => {
        getData();
    }, [])

    // console.log(data);
    const [text, setText] = useState("");
    if(!isAuth) {
        return <Redirect to = "/login" />
    }
    return (
        <div>
            <div>
                <input value = {text} onChange = {(e) => {setText(e.target.value)}} type  = "text" name = "todo" placeholder = "Enter the task" />
                <button onClick = {async () => {
                     dispatch(addTodoLoading())

                     const payload = {
                        title : text,
                        status : false
                     }
                     try {
                        let data = await axios.post("http://localhost:3001/todos", payload);
                        dispatch(addTodoSuccess(data))
                        getData();
                        
                     } catch(error) {
                        dispatch(addTodoError(error));
                     }

                }
                   
                }
                
                >ADD</button>
            </div>
            <hr />
            {
                !loading? ( <div>

                    {
                        data.map((e) => (
                            <div key = {e.id}>{e.title}</div>
                        ))
                    }
                </div>) : (
                    <h2>Loading.... just wait</h2>
                )
            }
           
        </div>
    )
}

export {Todo};