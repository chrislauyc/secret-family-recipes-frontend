import { InputBase, Paper, Select, MenuItem, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "85%",
    // margin: "1rem auto",
    margin: "auto",
  },

  dropdown: {
    padding: "0 0rem",
    border: "none",

    "& div[class = 'MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input'] ": {
      padding: "0 2rem 0 .5rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
  },

  divider: {
    margin: "0 .3rem 0 0",
  },

  searchInput: {
    width: "100%",
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  const { searchForm, setSearchForm } = props;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSearchForm({ ...searchForm, [name]: value });
  };

  return (
    <Paper component="form" className={classes.root} variant="outlined" onChange={handleChange}>
      <Select name="searchCategory" autoWidth={true} disableUnderline={true} className={classes.dropdown} defaultValue="all" placeholder="All Meals" onChange={handleChange}>
        <MenuItem value="all">All Meals</MenuItem>
        <MenuItem value="Breakfast">Breakfast</MenuItem>
        <MenuItem value="Lunch">Lunch</MenuItem>
        <MenuItem value="Dinner">Dinner</MenuItem>
        <MenuItem value="Dessert">Dessert</MenuItem>
        <MenuItem value="Snacks">Snacks</MenuItem>
      </Select>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <InputBase name="searchTerm" placeholder="Search" className={`${classes.searchInput}`} />
    </Paper>
  );
}
