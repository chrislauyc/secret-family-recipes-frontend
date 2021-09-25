import React, { useContext }  from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { Button, Grid, Typography } from "@material-ui/core";
import { RecipeContext } from "../../context/RecipeContext";


// import { axiosWithAuth } from "../../helpers/axiosWithAuth";
// import axios from "axios";



export default function Recipe() {
  const { recipe } = useContext(RecipeContext);
  // const recipe = cardsInformation[1]
  const history = useHistory();
//   const classes = useStyles();
  const { id } = useParams;


//   const handleReturn = () => {
//     axiosWithAuth()
      
//   };

  const handleReturn = (e) => {
    console.log("Cancel button pushed, routing back to home.");
    history.push("/home");
  };

  return (
       <Grid container direction="column" alignContent="center" justifyContent="center" >
         <Grid item lg={12}>
          <Grid container justifyContent="space-between" style={{width:"80vh"}}>
            <Grid item xs={12} md={2} lg={2}>
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
  );
}
//  // <form className={classes.root} noValidate autoComplete="off">
//     //   
//     // </form>