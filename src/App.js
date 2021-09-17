import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import PrivateRoute from './view/PrivateRoute'
import LogIn from './view/components/forms/LogIn';
import Signup from './view/components/forms/SignUp'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Route exact path='/' component={LogIn}/>
        <Route path='/signup' component={Signup}/>
        {/* <PrivateRoute path='/home' component={Home}/>
        <PrivateRoute path='/edit' component={EditRecipe}/>
        <PrivateRoute path='/add' component={AddRecipe}/> */}
      </div>
    </Router>
  );
}

export default App;
