import React, { useEffect, useContext } from "react";
import { Container, Grid } from "@material-ui/core";
import { cardsInformation } from "../dummyData";
import RecipeCard from "./RecipeCard";
import { RecipeContext } from "../context/RecipeContext";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

export default function RecipeCards({ searchForm }) {
  const { searchCategory, searchTerm } = searchForm;
  const { recipe, setRecipe } = useContext(RecipeContext);
  useEffect(() => {
    axiosWithAuth()
      .get("/recipes")
      .then((res) => {
        console.log("respone: ", res.data);

        setRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  }, []);
  console.log("recipes: ", recipe);
  console.log("Dummy data: ", cardsInformation);

  return (
    <Container>
      <Grid spacing={6} container justifyContent="center" alignItems="baseline">
        {cardsInformation.map((cardInfo, index) => {
          if (searchCategory === "all" && searchTerm === "") {
            // console.log("cardInfo: ", cardInfo);
            return (
              <Grid item key={index} xs={12} md={6} lg={4}>
                <RecipeCard cardInfo={cardInfo} />
              </Grid>
            );
          } else if (cardInfo.name.toLowerCase().includes(searchTerm.toLowerCase()) && (cardInfo.category === searchCategory || searchCategory === "all")) {
            return (
              <Grid item key={index} xs={12} md={6} lg={4}>
                <RecipeCard cardInfo={cardInfo} />
              </Grid>
            );
          } else if (searchTerm === "" && cardInfo.category === searchCategory) {
            return (
              <Grid item key={index} xs={12} md={6} lg={4}>
                <RecipeCard cardInfo={cardInfo} />
              </Grid>
            );
          } else {
            //pass
          }
        })}
      </Grid>
    </Container>
  );
}
