import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  Select,
  TextField,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { RecipeContext } from "../../context/RecipeContext";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AddRecipe() {
  const [recipe, setRecipe] = useState({
    source: "",
    category: "",
    recipe_name: "",
    image_url: "",
    steps: [],
  });
  const [step, setStep] = useState({ instructions: "" });

  const history = useHistory();
  const classes = useStyles();

  console.log(recipe);

  const addRecipe = (e) => {
    e.preventDefault()
    setRecipe({ ...recipe, steps: [...recipe.steps, step] });
    // setStep({ instructions: "" })
  };

  const handleChange = (e) => {
    if (e.target.name === "recipe_name") {
      setRecipe({
        ...recipe,
        recipe_name: e.target.value,
      });
    } else if (e.target.name === "source") {
      setRecipe({
        ...recipe,
        source: e.target.value,
      });
    } else if (e.target.name === "category") {
      setRecipe({
        ...recipe,
        category: e.target.value,
      });
    } else if (e.target.name === "Ingredients") {
      setRecipe({
        ...recipe,
        ingridients: e.target.value,
      });
    } else if (e.target.name === "description") {
      setStep({
        ...step,
        instructions: e.target.value,
      });
    }

    console.log("new recipe: ", recipe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // saveEdit(editColor);

    axiosWithAuth()
      .post("/recipes", recipe)
      .then((res) => {
        console.log("happy path: ", res.data);
        // localStorage.setItem("token", res.data.token);
        history.push("/home");
      })
      .catch((err) => {
        console.log("sad path: ", { err });
      });
  };

  const handleCancel = (e) => {
    console.log("Cancel button pushed, routing back to home.");
    history.push("/home");
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography variant="h5" component="h2">
          New Recipe
        </Typography>{" "}
        <br />
        <Grid item xs={12}>
          <div>
            <TextField
              id="outlined-basic"
              name="recipe_name"
              label="Name"
              variant="outlined"
              value={recipe.recipe_name}
              onChange={handleChange}
            />
          </div>
          <div>
            {" "}
            <TextField
              id="outlined-basic"
              name="source"
              label="Source"
              variant="outlined"
              value={recipe.source}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              name="image_url"
              label="Image"
              variant="outlined"
              value={recipe.imgae_url}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              name="category"
              label="Category"
              variant="outlined"
              value={recipe.category}
              onChange={handleChange}
            />
          </div>

          {/* <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="Category"
              value={recipe.category}
              onChange={handleChange}
            >
              <MenuItem value="Select One">Select One</MenuItem>
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
              <MenuItem value="Desert">Desert</MenuItem>
              <MenuItem value="Snacks">Snacks</MenuItem>
            </Select>
          </div> */}
          {/* <div>
            <TextField
              id="outlined-multiline-static"
              name="Description"
              label="Description"
              multiline
              rows={8}
              variant="outlined"
              value={recipe.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              name="Ingredients"
              label="Ingredients"
              multiline
              rows={8}
              variant="outlined"
              value={recipe.ingredients}
              onChange={handleChange}
            />
          </div> */}
          <div>
            <TextField
              id="outlined-multiline-static"
              name="description"
              label="Instructions"
              multiline
              rows={8}
              variant="outlined"
              value={step.instructions}
              onChange={handleChange}
            />
          </div>
          <div>
          </div>
          <Button onClick={addRecipe} variant="contained">
            Add Steps
          </Button>
          <div>
            <Button onClick={handleSubmit} variant="contained">
              Save
            </Button>
            <Button onClick={handleCancel} variant="contained">
              Cancel
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
