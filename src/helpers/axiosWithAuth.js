import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token
export const axiosWithAuth = () => {
  return axios.create({
    baseURL: `https://family-recipes-app.herokuapp.com/mock/${localStorage.getItem("id")}`});
};
