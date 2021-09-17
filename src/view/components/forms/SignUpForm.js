import { Link, useHistory } from "react-router-dom";

import { Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


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
}));

export default function SignUpForm({ values, change, submit, disabled, errors }) {
  const classes = useStyles();

  let history = useHistory();

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
    history.push("/");
  };

  const onChange = (evt) => {
    // const { name, value, type, checked } = evt.target;
    // const valueTouse = type === "checkbox" ? checked : value;
    // change(name, valueTouse);

    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <form onSubmit={onSubmit} className="signPage-form">
      <Paper elevation={10} className={classes.PapersStyle}>
        <Grid container justifyContent="space-around" alignItems="center" className="signPage-grid-container">
          <Grid className="signPage-grid-item" alignItems="center" item sm={6} xs={12}>
            <h2 className={classes.titleStyle}>Sign Up</h2>

            {/* username */}

            <TextField id="signup-username" className={classes.textFieldStyle} label="Username" placeholder="Enter Username" type="text" value={values.username} name="username" onChange={onChange} fullWidth />

            {/* email */}

            <TextField id="signup-email" className={classes.textFieldStyle} label="Email" placeholder="Enter Email" type="email" value={values.email} onChange={onChange} name="email" fullWidth />

            {/* password */}

            <TextField id="signup-password" className={classes.textFieldStyle} label="Password" placeholder="Enter Password" type="password" name="password" value={values.password} onChange={onChange} fullWidth />
          </Grid>

          <Grid className="signPage-grid-item" alignItems="center" item sm={6} xs={12}>
            <Button className={classes.ButtonStyle} type="submit" color="primary" variant="contained" disabled={disabled}>
              Register
            </Button>

            <label style={{ fontSize: "1.5rem" }}>
              Already have an account?
              <Link to="/">
                <span> Sign In</span>
              </Link>
            </label>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}
