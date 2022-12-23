import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createStore } from 'redux'
import rootReducer from './reducers/index.js'


const store = createStore(rootReducer)


firebase.initializeApp({
  apiKey: "AIzaSyBi6PuOWhR7jJBqVKT0XBJau7SQI2AqBIk",
  authDomain: "modsen-b6161.firebaseapp.com",
  projectId: "modsen-b6161",
  storageBucket: "modsen-b6161.appspot.com",
  messagingSenderId: "992841512885",
  appId: "1:992841512885:web:9bbc0e00c029e249994bfc"
}
);


export const Context = createContext(null)


const auth = firebase.auth()
const firestore = firebase.firestore()
export {firestore }


ReactDOM.render(<Context.Provider store={store} value={{
    firebase,
    auth,
    firestore
}}>
<App/>
</Context.Provider>,
document.getElementById('root'));

