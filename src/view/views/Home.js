// import PrivateRoute from "./components/PrivateRoute";
import React, { useState } from "react";
import RecipeCards from "../components/RecipeCards";
import AppBarHead from "../components/AppBarHead";
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
