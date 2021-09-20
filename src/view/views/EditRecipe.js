import React, { useEffect, useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
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
// import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function EditRecipe() {
  // const { recipe, setRecipe } = useContext(RecipeContext);
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
    const [recipe, setRecipe] = useState({
      category: "",
      image_url: "",
      recipe_id: 0,
      recipe_name: "",
      source: "",
    });

  console.log("id in edit component: ", id);

  console.log(recipe)

  const handleChange = (e) => {
    // const { value, name } = event.target;
    // setRecipe({ ...recipe, [name]: value });
    // console.log("new recipe: ", recipe);
    setRecipe({
      ...recipe, [e.target.name]: e.target.value
    })
  };

  // const handleChange = (e) => {
  //   if (e.target.name === "Name") {
  //     setRecipe({
  //       ...recipe,
  //       name: e.target.value,
  //     });
  //   } else if (e.target.name === "Source") {
  //     setRecipe({
  //       ...recipe,
  //       source: e.target.value,
  //     });
  //   } else if (e.target.name === "Category") {
  //     setRecipe({
  //       ...recipe,
  //       category: e.target.value,
  //     });
  //   } else if (e.target.name === "Description") {
  //     setRecipe({
  //       ...recipe,
  //       description: e.target.value,
  //     });
  //   } else if (e.target.name === "Ingredients") {
  //     setRecipe({
  //       ...recipe,
  //       ingridients: e.target.value,
  //     });
  //   } else if (e.target.name === "Instructions") {
  //     setRecipe({
  //       ...recipe,
  //       instructions: e.target.value,
  //     });
  //   }
  //
  //   console.log("new recipe: ", recipe);
  // };

  const handleSubmit = (e, editItem) => {
    e.preventDefault();
    // saveEdit(editColor);

    axiosWithAuth()
      .put("/:user_id/recipes/recipe_id", recipe)
      .then((res) => {
        console.log("happy path: ", res.data, recipe);
        setRecipe(res.data)
        // localStorage.setItem("token", res.data.token);
        history.push("/home");
      })
      .catch((err) => {
        console.log("sad path: ", err);
      });
  };
  const handleDelete = () => {
    axiosWithAuth()
      .delete(
        `https://secret-family-recipes6.herokuapp.com/mock/:user_id/recipes/recipe_id`
      )
      .then(() => {
        console.log("Deleted item succefully.");
        history.push("/home");
      })
      .catch((err) => {
        console.log("sad path: ", err);
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
          Edit Recipe {recipe.recipe_name}
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
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="category"
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
          </div>
          <div>
            {/* <TextField id="outlined-multiline-static" name="description" label="Description" multiline rows={8} variant="outlined" value={recipe.description} onChange={handleChange} />
          </div>
          <div>
            <TextField id="outlined-multiline-static" name="ingredients" label="Ingredients" multiline rows={8} variant="outlined" value={recipe.Ingredients} onChange={handleChange} />
          </div>
          <div>
            <TextField id="outlined-multiline-static" name="instructions" label="Instructions" multiline rows={8} variant="outlined" value={recipe.instructions} onChange={handleChange} /> */}
          </div>
          <div>
            <Grid container justifyContent="space-between">
              {" "}
              <Grid item>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={handleCancel} variant="contained" size="small">
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleDelete}
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
