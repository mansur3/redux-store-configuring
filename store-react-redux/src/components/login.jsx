import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loginSuccess} from "../redux/LoginStore/action.js";
import axios from "axios";
import {Redirect} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const dispatch = useDispatch();

    const {isAuth, token} = useSelector((store) => store.auth);
    
    if(isAuth) {
        return <Redirect to = "/" />
    }

    return (
        <div>
            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "text" name = "username" placeholder = "Enter the email" />
            <br />
            <input value = {password} onChange = {(e) => setPassword(e.target.value)} type = "text" name = "password" placeholder = "Enter the password" />
            <br />
            <button onClick = { async () => {
                try {
                    const payload = {
                        email : email,
                        password: password,
                    }
                    let {data} = await axios.post("https://reqres.in/api/login", payload)
                    dispatch(loginSuccess(data.token))
                    

                } catch(error) {

                }
            }}>LOGIN</button>
        </div>
    )
}

export {Login};