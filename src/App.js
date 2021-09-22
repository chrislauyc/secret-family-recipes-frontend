import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useMemo } from "react";
import PrivateRoute from "./view/PrivateRoute";
import LogIn from "./view/components/forms/LogIn";
import Signup from "./view/components/forms/SignUp";
import Home from "./view/components/Home";
import AddRecipe from "./view/views/AddRecipe";
import EditRecipe from "./view/views/EditRecipe";
import { RecipeContext } from "./context/RecipeContext";
import Recipe from "./view/components/Recipe";

function App() {
  const initialValues = [
    {
      source: "",
      category: "",
      recipe_name: "",
      image_url: "",
      steps: [],
    },
  ];
  const [recipe, setRecipe] = useState(initialValues);

  const providerValue = useMemo(
    () => ({ recipe, setRecipe }),
    [recipe, setRecipe]
  );
  return (
    <RecipeContext.Provider value={providerValue}>
      <Router>
        <div className="App">
          <header className="App-header"></header>
          <Route exact path="/" component={LogIn} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/:id/recipe" component={Recipe} />
          <PrivateRoute path="/EditRecipe" component={EditRecipe} />
          <PrivateRoute path="/AddRecipe" component={AddRecipe} />
        </div>
      </Router>
    </RecipeContext.Provider>
  );
}

export default App;
