import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography, Paper, TextField } from "@material-ui/core";
import { RecipeContext } from "../../context/RecipeContext";

// import { axiosWithAuth } from "../../helpers/axiosWithAuth";
// import axios from "axios";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

export default function Recipe() {
  const { recipe } = useContext(RecipeContext);
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
       <Grid container alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
         <Typography variant="h5" component="h2">
           Edit Recipe {recipe.name}
         </Typography>{" "}
         <br />
         <Grid item xs={12}>
           <div>
             <TextField id="outlined-basic" name="name" label="Name" variant="outlined" value={recipe.name} />
           </div>
           <div>
             {" "}
             <TextField id="outlined-basic" name="source" label="Source" variant="outlined" value={recipe.source} />
           </div>
           <div>
             <TextField id="outlined-multiline-static" name="description" label="Description" multiline rows={8} variant="outlined" value={recipe.description} />
           </div>
           <div>
             <TextField id="outlined-multiline-static" name="ingredients" label="Ingredients" multiline rows={8} variant="outlined" value={recipe.Ingredients} />
           </div>
           <div>
             <TextField id="outlined-multiline-static" name="instructions" label="Instructions" multiline rows={8} variant="outlined" value={recipe.instructions} />
           </div>
           <div>
             <Grid container>
               <Grid item>
                 <Button onClick={handleReturn} variant="contained" size="small">
                   Go Back
                 </Button>
               </Grid>
             </Grid>
           </div>
         </Grid>
       </Grid>
   </Paper>
  );
}
 // <form className={classes.root} noValidate autoComplete="off">
    //   
    // </form>