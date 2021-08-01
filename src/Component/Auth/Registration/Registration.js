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
import Header from '../../Layout/Header/Header'
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../Layout/Footer/Footer";
const validationSchema = yup.object({
  fname: yup.string("Enter your Firstname").required(" Firstname is required"),
  lname: yup.string("Enter your Lastname").required("Lastname is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

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
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
toast.configure();
export default function SignUp() {
  //   const dispatchMethod = useDispatch();

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let userDetails1 = {
        fname: values.fname,
        lname: values.lname,
        email: values.email,
        password: values.password,
      };
      console.log(userDetails1);
      axios
        .post("https://nodeprojectapi.herokuapp.com/register", userDetails1)
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
        history.push("/LogIn");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Already Registered", {
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
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            className={classes.form}
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="fname"
                  name="fname"
                  label="Firstname"
                  placeholder="Enter your First Name"
                  value={formik.values.fname}
                  onChange={formik.handleChange}
                  error={formik.touched.fname && Boolean(formik.errors.fname)}
                  helperText={formik.touched.fname && formik.errors.fname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Enter your Last Name"
                  required
                  id="lname"
                  name="lname"
                  label="Lastname"
                  value={formik.values.lname}
                  onChange={formik.handleChange}
                  error={formik.touched.lname && Boolean(formik.errors.lname)}
                  helperText={formik.touched.lname && formik.errors.lname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Enter your Email Address"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder='Enter your Password"'
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2" as={Link} to="/Login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
     
    </>
  );
}
