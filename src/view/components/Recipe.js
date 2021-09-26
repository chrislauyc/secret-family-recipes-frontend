import React, { useEffect, useState }  from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from '@mui/icons-material/Home';
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import { Checkbox } from "@mui/material";




const useStyles = makeStyles((theme) => ({
    titleContainer: {
      display: "flex",
      justifyContent: "space-around",
      width: "",
      alignItems:"center",
      borderBottom: "5px solid #FF6969"
    },
    recipeContainer: {
        maxWidth:"80rem",
        margin:"auto"
    },
    introContainer: {
        height: "35rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
        
    },
    image: {
        width: "60%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain"
    },
    ingredients: {
        width: "35%",
        height: "fit-content",
        border: "3px dashed grey",
        borderRadius: "10px",
        backgroundColor: "#FC977B",
        
    },
    ingTitle: {
        width: "100%",
        textAlign: "center"
    },
    ingredient: {
        "& p": {
            display:"inline"
        },
    },
    name: {
        marginLeft: ".5rem"
    },
    amount: {
        marginRight: ".2rem"
    },
    steps: {
        
    }
  }));


export default function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [name, setName] = useState("")
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/${id}`)
      .then((res) => {
        console.log("respone: ", res.data);
        setRecipe(res.data);
        setName(res.data.recipe_name.toUpperCase())
      })
      .catch((err) => {
        console.log({err});
        debugger;
      });
  }, [id]);


  const handleReturn = (e) => {
    console.log("Cancel button pushed, routing back to home.");
    history.push("/home");
  };


  return (
       <div className={classes.recipeContainer}>
           <div className={classes.titleContainer}>
               <h1>{name}</h1>

               <Button variant="contained" startIcon={<HomeIcon/>} onClick={handleReturn} style={{height:"fit-content"}}>
                   Home
               </Button>
           </div>
           <div className={classes.introContainer}>
               <div className={classes.image} style={{backgroundImage: `url(${recipe.image_url})`}}/>
               <div className={classes.ingredients}>
                   <div className={classes.ingTitle}><h3>Ingredients</h3></div>
                   <div className={classes.ingredient}>
                        <Checkbox/>
                        <p className={classes.amount}>amount</p>
                        <p className={classes.unit}>unit</p>
                        <p className={classes.name}>name</p>
                    </div>
                    <div className={classes.ingredient}>
                        <Checkbox/>
                        <p className={classes.amount}>amount</p>
                        <p className={classes.unit}>unit</p>
                        <p className={classes.name}>name</p>
                    </div>
                   {/* {recipe.ingredients.map(ingredient => {
                       return(
                           <div className={classes.ingredient}>
                               <Checkbox/>
                               <p className={classes.amount}>{ingredient.amount}</p>
                               <p className={classes.unit}>{ingredient.unit}</p>
                               <p className={classes.name}>{ingredient.name}</p>
                           </div>
                       )
                   })} */}
               </div>
           </div>
           <div className={classes.steps}>
               {/* {recipe.steps.map((step,int) => {
                   return(
                       <div className={classes.step}>
                           <p>step {int}: <br/> {step}</p>
                       </div>
                   )
               })} */}
           </div>
       </div>
  );
}
// recipe.image_url