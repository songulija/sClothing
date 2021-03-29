
import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import './App.css';
import HatsScreen from './screens/HatsScreen';
import HomePage from './screens/HomePage';

function App() {//to use Routes in App componennt we use Router
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsScreen} />
      </Switch>
    </div>    
  );
}//when user goes to localhost:3000/ route then render HomePage component

export default App;
