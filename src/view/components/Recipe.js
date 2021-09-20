import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Button, Grid, Typography, Paper, TextField, Select } from "@material-ui/core";
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
//   const { id } = useParams();


//   const handleReturn = () => {
//     axiosWithAuth()
      
//   };

  const handleCancel = (e) => {
    console.log("Cancel button pushed, routing back to home.");
    history.push("/home");
  };

  return (
   <Paper>
       <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
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
             <Select labelId="demo-simple-select-label" id="demo-simple-select" name="category" value={recipe.category} >
               <MenuItem value="Select One">Select One</MenuItem>
               <MenuItem value="Breakfast">Breakfast</MenuItem>
               <MenuItem value="Lunch">Lunch</MenuItem>
               <MenuItem value="Dinner">Dinner</MenuItem>
               <MenuItem value="Desert">Desert</MenuItem>
               <MenuItem value="Snacks">Snacks</MenuItem>
             </Select>
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
             <Grid container justify="space-between">
               {" "}

               <Grid item>
                 <Button onClick={handleCancel} variant="contained" size="small">
                   Cancel
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