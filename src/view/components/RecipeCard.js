import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Button, Card, makeStyles, CardContent, CardActions, Grid, IconButton } from "@material-ui/core";

import clsx from "clsx";
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
  const classes = useStyles();
  const { id } = useParams();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log("id in recipecard component: ", id);
  // console.log("card info id: ", cardInfo.id);

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Secret Recipe
          </Typography>
          <Typography variant="h5" component="h2">
            Title: {cardInfo.recipe_name}
          </Typography>
          <Typography className={classes.pos} color="textPrimay">
            Recipe Source: {cardInfo.recipe_source}
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
          <Grid container justify="space-between">
            {/* EDIT BUTTON */}
            <Grid item>
              <Link to={`/EditRecipe/${cardInfo.id}`} style={{ textDecoration: "none" }}>
                <Button color="primary" size="small">
                  Edit
                </Button>
              </Link>
            </Grid>

            {/* EXPAND BUTTON
            <Grid item justify="flex-end">
              <IconButton onClick={handleExpandClick}>
                <ExpandMoreIcon
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  aria-expanded={expanded}
                  aria-label="show more"
                />
              </IconButton>
            </Grid>
          </Grid> */}
          </Grid>
        </CardActions>

        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className={classes.pos} variant="body2" component="p">
              <Typography color="primary">Ingredients</Typography>
              {cardInfo.ingredients}
            </Typography>
            <Typography variant="body2" component="p">
              <Typography color="primary">Instructions</Typography>
              {cardInfo.instructions}
            </Typography>
          </CardContent>
        </Collapse> */}
      </Card>
    </>
  );
}
