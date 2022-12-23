import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import React, {useContext} from 'react';
import {Context} from "../index";
import firebase from 'firebase/compat/app';



const Login = () => {

    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)    
    }

    return (
        <div>
            <p id='head1' class='header'>Для начала необходимо авторизоваться</p>
            <NavLink to ={LOGIN_ROUTE}>
            <button onClick={login}>Войти</button>
            </NavLink>
            <div class='light x1'></div>
            <div class='light x2'></div>
            <div class='light x3'></div>
            <div class='light x4'></div>
            <div class='light x5'></div>
            <div class='light x6'></div>
            <div class='light x7'></div>
            <div class='light x8'></div>
            <div class='light x9'></div>
        </div>
    )
}

export default Login