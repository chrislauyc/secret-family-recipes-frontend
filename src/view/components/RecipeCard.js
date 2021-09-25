import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Card, makeStyles, CardContent, CardActions, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 100,
  },
  pos: {
    marginBottom: 12,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "5px"
  }
}));

export default function RecipeCard({ cardInfo }) {
  console.log(cardInfo)
  const classes = useStyles();
  const id = cardInfo.recipe_id;
  const title = cardInfo.recipe_name

  return (
    <Link to={`/recipe/${id}`} style={{ textDecoration: "none" }}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title.toUpperCase()}
          </Typography>
          <Typography className={classes.pos} color="textPrimary">
            Recipe Source: {cardInfo.source}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Category: {cardInfo.category}
          </Typography>
          <Paper>
            <img src={cardInfo.image_url} alt={`Photo of ${cardInfo.recipe_name}`} className={classes.image}/>
          </Paper>
        </CardContent>

        <CardActions disableSpacing>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link to={`/EditRecipe/${cardInfo.id}`} style={{ textDecoration: "none" }}>
                <Button color="primary" size="small">
                  Edit
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Link>
  );
}
