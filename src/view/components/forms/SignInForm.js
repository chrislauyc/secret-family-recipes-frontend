import { Link } from "react-router-dom";
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";



const useStyles = makeStyles((theme) => ({
  PapersStyle: {
    height: "70vh",
    width: "80%",
    margin: "5% auto 0 auto",
  },
  titleStyle: {
    fontSize: "5rem",
    textAlign: "center",
  },
  textFieldStyle: {
    width: "70%",
    padding: "2px",
  },
  ButtonStyle: {
    marginTop: "5%",
    height: "20%",
    width: "60%",
    borderRadius: "50px",
    fontSize: "1.75rem",
  },
  SignInForm: {
    
  }
  
}));

export default function SignInForm({ values, change, submit, disabled }) {
  const classes = useStyles();
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <form onSubmit={onSubmit} className={classes.SignInForm}>
      <Paper elevation={10} className={classes.PapersStyle} >
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          className="signPage-grid-container"
        >
          <Grid item sm={6} xs={12}>
            <div className="signPage-grid-item">
              <h2 className={classes.titleStyle}>Sign In</h2>

              {/* email */}
              <TextField
                className={classes.textFieldStyle}
                label="Username"
                placeholder="Enter Username"
                type="text"
                name="username"
                value={values.username}
                onChange={onChange}
                fullWidth
              />

              {/* password */}
              <TextField
                className={classes.textFieldStyle}
                label="Password"
                placeholder="Enter Password"
                type="password"
                name="password"
                value={values.password}
                onChange={onChange}
                fullWidth
              />
            </div>
          </Grid>

          <Grid item sm={6} xs={12}>
            <div className="signPage-grid-item">
              <Button
                className={classes.ButtonStyle}
                type="submit"
                color="primary"
                variant="contained"
                disabled={disabled}
                // endIcon={<ArrowForwardIcon />}
              >
                Log In
              </Button>

              <label style={{ fontSize: "1.5rem" }}>
                Don't have an account?
                <Link to="/signup">
                  <span> Sign Up</span>
                </Link>
              </label>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}
