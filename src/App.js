
import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import HomePage from './screens/HomePage';
import ShopPage from './screens/shopPage/ShopPage';
import SignInSignUp from './screens/signIn/SignInSignUp';

function App() {//to use Routes in App componennt we use Router
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}//when user goes to localhost:3000/ route then render HomePage component

export default App;
