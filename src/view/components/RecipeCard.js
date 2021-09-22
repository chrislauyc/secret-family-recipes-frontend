import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Card, makeStyles, CardContent, CardActions, Grid } from "@material-ui/core";
import { useHistory, useParams } from "react-router";

// import clsx from "clsx";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 100,
  },
  title: {
    fontSize: 14,
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeCard({ cardInfo }) {
  const {push} = useHistory();
  const classes = useStyles();
  const { id } = useParams;
  

  const handleClick = () => {
    push(`/${id}/recipe`)
  }

  return (
    <>
      <Card className={classes.root} >
        <CardContent onClick={handleClick}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Secret Recipe
          </Typography>
          <Typography variant="h5" component="h2">
            Title: {cardInfo.recipe_name}
          </Typography>
          <Typography className={classes.pos} color="textPrimay">
            Recipe Source: {cardInfo.source}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Category: {cardInfo.category}
          </Typography>
          <Typography className={classes.pos} variant="body2" component="p">
            <Typography color="primary">Description</Typography>

            {cardInfo.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Grid container justifyContent="space-between">
            {/* EDIT BUTTON */}
            <Grid item>
              <Link
                to={`/EditRecipe/${cardInfo.recipe_id}`}
                style={{ textDecoration: "none" }}
              >
                <Button color="primary" size="small">
                  Edit
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}
