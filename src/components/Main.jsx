import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore"
import Loader from './Loader';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';






const Main = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)

    const [affairs, loading] = useCollectionData(
        firestore.collection('affairs')
    )

    

   /*  const outAffairs = async () => {
        firestore.collection('affairs').add({
            uid: user.uid,
            text: value,
        })
        setValue('')
    } */
    
  
    if(loading) {
        return <Loader/>
    }

    return (
        <div>
            {/* <AddTodo />
            <VisibleTodoList />
            <Footer /> */}
            <button style={{top:"80vh"}} onClick={() => auth.signOut()}>Выйти</button>
        </div>
    )
}

export default Main