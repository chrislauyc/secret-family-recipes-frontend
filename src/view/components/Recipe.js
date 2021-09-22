import React from "react";
import { useHistory } from "react-router-dom";
// , { useContext } 
import { Button, Grid, Typography, Paper } from "@material-ui/core";
// import { RecipeContext } from "../../context/RecipeContext";


// import { axiosWithAuth } from "../../helpers/axiosWithAuth";
// import axios from "axios";



 const recipe = {
   "recipe_id":1,
   "user_id":1,
   "source":"grandmother",
   "category":"dinner",
   "recipe_name":"tacos",
   "image_url":"https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg",
   "steps":{"description":"cook them",
   "ingredients":[
     {"ingredient_name":"taco shell","amount":10,"unit":"none"},
     {"ingredient_name":"miced beef","amount":125,"unit":"gram"}]}}

export default function Recipe() {
  // const { recipe } = useContext(RecipeContext);
  // const recipe = cardsInformation[1]
  const history = useHistory();
//   const classes = useStyles();
  // const { id } = useParams();


//   const handleReturn = () => {
//     axiosWithAuth()
      
//   };

  const handleReturn = (e) => {
    console.log("Cancel button pushed, routing back to home.");
    history.push("/home");
  };

  return (
   <Paper>
       <Grid container direction="column" justifyContent="center" style={{ height: "100vh", width:"80vh" }}>
         <Grid item xs={2}>
          <Grid container>
            <Grid item>
              <Typography variant="h4" component="h2">
              {recipe.recipe_name}
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={handleReturn} variant="contained" size="small">
                Home
              </Button>
            </Grid>
         </Grid>
       </Grid>
      </Grid>
   </Paper>
  );
}
 // <form className={classes.root} noValidate autoComplete="off">
    //   
    // </form>