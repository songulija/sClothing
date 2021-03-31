
import React, { useState, useEffect, useRef } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import HomePage from './screens/HomePage';
import ShopPage from './screens/shopPage/ShopPage';
import SignInSignUp from './screens/signIn/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';//function to check if authenticated

const App = () => {//to use Routes in App componennt we use Router

  //useState initial value, and function to update initial value
  const [currentUser, setCurrentUser] = useState(null)
  //useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  const unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    //on our firebase project. its like subscribing & always listening to auth
    //if any changes occur on firebase related to this application, it will sends message that auth state changed
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      //setCurrentUser will update initial value(currentUser) to that user object
      if (userAuth) {//we'll get data if we signing in
        const userRef = await createUserProfileDocument(userAuth);

        //subscribe, listen to this userRef for any changes to that data, and with first parameter we get first state of that data
        userRef.onSnapshot(snapShot => {//we get back snapshot object
          setCurrentUser({//setting currentUser object
            id: snapShot.id,
            ...snapShot.data()
          }, () => console.log(currentUser))//add snapshot(document id), and whatever data is inside snapshot(document) to currentUser
        });
        console.log(currentUser)
      }

      //if user logs out set user data to null
      setCurrentUser(userAuth);//setting to null that we get from auth library

    })//if auth function is called or changed, useEffect function will be called




    //this return function it is triggered when a component unmounts from the DOM
    return () => {
      unsubscribeFromAuth();//it will close subscription
    }
  }, []);




  return (//pass property currentUser to header component
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}//when user goes to localhost:3000/ route then render HomePage component

export default App;
