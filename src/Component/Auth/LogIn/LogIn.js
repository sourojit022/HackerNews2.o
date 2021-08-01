
import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import InputAdornment from "@material-ui/core/InputAdornment";
import Header from '../../Layout/Header/Header'
import Footer from "../../Layout/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, " minimum 8 characters")
    .required("Password is required"),
});
toast.configure();
export default function Login() {
  const redirectt = () => {
    history.push("/Registration");
  };

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      let userDetails = { email: values.email, password: values.password };
      console.log(userDetails);

      axios
        .post("https://nodeprojectapi.herokuapp.com/login", userDetails)
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          let storeData = res.data.data.token;
          let storeData1 = res.data.data.firstname;
          console.log(storeData);
          window.localStorage.setItem("token", storeData);
          window.localStorage.setItem("firstname", storeData1);
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Email/Password doesn't match", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    },
  });
  const history = useHistory();

  return (
    <>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter your Email"
              name="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              type="password"
              fullWidth
              required
              name="password"
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter your Password"
              id="password"
              autoFocus
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to="/Registration" variant="body2" onClick={redirectt}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    
    </>
  );
}
