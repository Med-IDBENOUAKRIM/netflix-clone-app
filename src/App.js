import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from './components/homeScreen/HomeScreen';
import './App.css';
import LoginScreen from './components/loginScreen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

// npm install -g firebase-tools

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout);
      }
    })
    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? ( <LoginScreen /> ) : (
          <Switch>
            <Route exact path='/' component={HomeScreen} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
