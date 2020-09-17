import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory } from "react-router-dom"
import { auth } from './Firebase';


function Login() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event =>{
        event.preventDefault();
        //do the logic logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/");

        })
        .catch(e=> alert(e.message));
    }

    const register = (event) =>{
        event.preventDefault();
        //do the register logic
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push("/")
        })
        .catch(e=>{
            alert(e.message);
        })
    }

    return (
        <div className="login">
            <Link to="/">
            <img
            className="login__logo"
            src="https://www.amazon.in/ref=ap_frn_logo.svg"
            />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                    value= {email}
                    onChange={event=>{
                        setEmail(event.target.value)
                    }}
                    type= "email"
                    />
                    <h5>Password</h5>
                    <input
                    onChange={event=>{
                        setPassword(event.target.value)
                    }}
                    value={password}
                    type="password"
                    />
                    <button onClick= {login} type="submit" className="login__signInButton">
                        
                        Sign In
                        
                        
                    </button>
                   
                </form>
                <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy 
                        Notice, our cookies Notice and our Interest-Based Ads Notice.
                    </p>
                <button onClick={register} className="login__registerButton">
                    Create your Amazon Account
                </button>

            </div>
           
            
        </div>
    )
}

export default Login
