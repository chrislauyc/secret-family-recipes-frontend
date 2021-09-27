import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useMemo } from "react";

import PrivateRoute from './view/PrivateRoute'
import LogIn from './view/components/forms/LogIn';
import Signup from './view/components/forms/SignUp'
import Home from './view/components/Home'

import { RecipeContext } from "./context/RecipeContext";
import Recipe from "./view/components/Recipe";


function App() {
  const initialValues = [
    {
      recipe_id: 2,
      user_id: 3,
      category: "dessert",
      recipe_name: "strawberry pretzel salad",
      image_url: "https://images-gmi-pmc.edge-generalmills.com/fbd3fe36-262c-4441-8dfd-1f9a621174e4.jpg",
      source: "grandmother",
      ingredients: "strawberry",
      descriptions: "cook"
    },
  ];
  const [recipe, setRecipe] = useState(initialValues);

  const providerValue = useMemo(() => ({ recipe, setRecipe }), [recipe, setRecipe]);
  return (
    <RecipeContext.Provider value={providerValue}>
      <Router>
        <Switch>
          <Route exact path='/' component={LogIn}/>
          <Route path='/signup' component={Signup}/>
          <PrivateRoute path='/home' component={Home}/>
          <PrivateRoute path='/recipe/:id' component={Recipe}/>
          {/* <PrivateRoute path='/edit' component={EditRecipe}/>
          <PrivateRoute path='/add' component={AddRecipe}/> */}
        </Switch>
      </Router>
    </RecipeContext.Provider>
  );
}

export default App;
