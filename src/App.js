import React, {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "./index";
import './styles/App.scss';
import Loader from './components/Loader';


const App = () => {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)


  if(loading) {
    return <Loader/>
  }

    return (
        <BrowserRouter>
          <AppRouter/>  
        </BrowserRouter>
    )
}

export default App;
