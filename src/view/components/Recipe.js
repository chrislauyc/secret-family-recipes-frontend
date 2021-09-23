import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Button, Grid, Typography, Paper, TextField, Select,Container } from "@material-ui/core";

// import { axiosWithAuth } from "../../helpers/axiosWithAuth";
// import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formContainer:{
    display:"flex",
    flexDirection:"column",
    border:"solid 1px black"
  },
}));


const initialRecipe = {
  recipe_name:"",
  source:"",
  category:"",
  steps:[]
}
const initialStep = {
  description:"",
  ingredients:[]
}
const initialIng = {
  ingredient_name:"",
  amount:-1,
  unit:""
}
const StepForm = (props) =>{
  const {step,handleChange,classes,addStep} = props;
  return (
    <Container className={classes.formContainer}>
      Step
      <TextField onChange={handleChange} id="outlined-multiline-static" name="description" label="Step Description" multiline rows={8} variant="outlined" value={step.description} />
      <Button onClick={addStep} variant ="contianed" size="small">Add Step</Button>
      {
        step.ingredients.map((ing)=>(
          <>
            <div>{ing.ingredient_name}</div>
            <div>{ing.amount}</div>
            <div>{ing.unit}</div>
          </>
          ))
      }
    </Container>
  );
}
const IngredientForm = (props) =>{
  const {ing,handleChange,classes, addIng} = props;
  return (
    <Container className={classes.formContainer}>
      Ingreident
      <TextField onChange={handleChange} id="outlined-multiline-static" name="ingredient_name" label="Name" multiline rows={8} variant="outlined" value={ing.ingredient_name} />
      Amount
      <input label="Amount" onChange={handleChange} type="number" id="outlined-multiline-static" name="amount" multiline rows={8} variant="outlined" value={ing.amount} />
      <TextField onChange={handleChange} id="outlined-multiline-static" name="unit" label="Unit" multiline rows={8} variant="outlined" value={ing.unit} />
      <Button onClick={addIng} variant ="contianed" size="small">Add Ingredient</Button>
    </Container>
  );
}
const RecipeForm = (props)=>{
  const {recipe,handleChange,classes, handleCancel} = props;
  return (
    <Container className={classes.formContainer}>
      Recipe
      <TextField onChange={handleChange} id="outlined-basic" name="recipe_name" label="Name" variant="outlined" value={recipe.recipe_name} />
      <TextField onChange={handleChange} id="outlined-basic" name="source" label="Source" variant="outlined" value={recipe.source} />
      <Select labelId="demo-simple-select-label" id="demo-simple-select" name="category" value={recipe.category} >
        <MenuItem value="Select One">Select One</MenuItem>
        <MenuItem value="Breakfast">Breakfast</MenuItem>
        <MenuItem value="Lunch">Lunch</MenuItem>
        <MenuItem value="Dinner">Dinner</MenuItem>
        <MenuItem value="Desert">Desert</MenuItem>
        <MenuItem value="Snacks">Snacks</MenuItem>
      </Select>
      <Button onClick={handleCancel} variant="contained" size="small">
        Cancel
      </Button>
      {
        recipe.steps.map((step)=>(
          <>
            <div>{step.description}</div>
            {
              step.ingredients.map((ing)=>(
                <>
                  <div>{ing.ingredient_name}</div>
                  <div>{ing.amount}</div>
                  <div>{ing.unit}</div>
                </>
                ))
            }
          </>
          ))
      }
    </Container>
  );
}

export default function Recipe() {
  const classes = useStyles();
  const [recipe, setRecipe] = useState(initialRecipe);
  const [step, setStep] = useState(initialStep);
  const [ing, setIng] = useState(initialIng);


  const history = useHistory();

  const addStep = () =>{
    setRecipe({...recipe,steps:[...recipe.steps,step]});
    setStep(initialStep);
  }
  const addIng = () =>{
    setStep({...step,ingredients:[...step.ingredients,ing]});
    setIng(initialIng);
  }
  const handleChange = (e) =>{
    const {name, value} = e.target;
    if(Object.keys(initialRecipe).includes(name)){
      setRecipe({...recipe,[name]:value})
    }
    else if(Object.keys(initialStep).includes(name)){
      setStep({...step,[name]:value})
    }
    else if(Object.keys(initialIng).includes(name)){
      setIng({...ing,[name]:value})
    }
  }
  const handleCancel = (e) => {
    console.log("Cancel button pushed, routing back to home.");
    history.push("/home");
  };

  return (
   <Paper>
       <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
         <Typography variant="h5" component="h2" >
           Edit Recipe {recipe.recipe_name}
         </Typography>{" "}
         <br />
         <Grid container alignItems="center" justify="center">
            <Grid item>
              <RecipeForm recipe={recipe} setRecipe={setRecipe} handleChange={handleChange} classes={classes} handleCancel={handleCancel}/>
            </Grid>
            <Grid item>
              <StepForm step={step} setStep={setStep} handleChange={handleChange} classes={classes} addStep={addStep}/>
            </Grid>
            <Grid item>
              <IngredientForm ing={ing} setIng={setIng} handleChange={handleChange} classes={classes} addIng={addIng}/>
            </Grid>
         </Grid>
       </Grid>
   </Paper>
  );
}