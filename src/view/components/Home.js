// import PrivateRoute from "./components/PrivateRoute";
import React, { useState } from "react";
import RecipeCards from "./RecipeCards";
import AppBarHead from "./AppBarHead";

export default function Home() {
  const [searchForm, setSearchForm] = useState({
    searchCategory: "all",
    searchTerm: "",
  });

  return (
    <>
      <AppBarHead searchForm={searchForm} setSearchForm={setSearchForm} />
      <RecipeCards searchForm={searchForm} />
    </>
  );
}
