import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useMemo } from "react";

// import PrivateRoute from './view/PrivateRoute'
import LogIn from './view/components/forms/LogIn';
import Signup from './view/components/forms/SignUp'
import Home from './view/components/Home'

import { RecipeContext } from "./context/RecipeContext";

function App() {
  const initialValues = [
    {
      name: "",
      source: "",
      category: "",
      description: "",
      ingredients: "",
      instructions: "",
    },
  ];
  const [recipe, setRecipe] = useState(initialValues);

  const providerValue = useMemo(() => ({ recipe, setRecipe }), [recipe, setRecipe]);
  return (
    <RecipeContext.Provider value={providerValue}>
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <Route exact path='/' component={LogIn}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/home' component={Home}/>
          {/* <PrivateRoute path='/edit' component={EditRecipe}/>
          <PrivateRoute path='/add' component={AddRecipe}/> */}
        </div>
      </Router>
    </RecipeContext.Provider>
  );
}

export default App;
