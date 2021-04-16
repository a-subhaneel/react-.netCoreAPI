import React, { Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import IndexView from '../IndexView/IndexView';
import userStateModel from '../../Models/userModel'
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import validator from 'validator';
import Validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

function Copyright() {
  return (
    <Typography variant="overline" color="textSecondary" align="center" >
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cssOutlinedInput: {
    "&:hover $BorderOutline": {
      borderColor: "#3f51b5" //hovered
    },
  },
  BorderOutline: {},
}));



function SignUp() {
  const classes = useStyles();

  //   gender: '',
  const [state = {
    firstName: "",
    lastName: '',
    emailId: '',
    gender: '',
    password: '',
  }] = useState([]);

  const onSuccess = (data, ev) => {
    console.log(data);
  }


  const postDataHandler = () => {
    debugger;
    if (state.firstName || state.password || state.emailId || state.lastName === "") {
      // setError("Fields are required");
      return;
    }
    const updatePost = {
      firstName: state.firstName,
      lastName: state.lastName,
      emailId: state.emailId,
      gender: state.gender,
      password: state.password,
    };
    axios.post('http://localhost:62789/api/UserRegistration/GetSignupData', updatePost)
      .then(response => {
        debugger;
        console.log(response);
      });
  }

  return (
    <Container component="main" maxWidth="md" >
    <form>
        {/* {posts} */}
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ paddingBottom: '15px' }}>
            Sign up
        </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>

              {/* <CheckJs/> */}

              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                type="text"
                fullWidth
                label="First Name"
                value={state.firstName}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    notchedOutline: classes.BorderOutline,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={state.lastName}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    notchedOutline: classes.BorderOutline,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                required
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                value={state.emailId}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    notchedOutline: classes.BorderOutline,
                  },
                }}
              />
            </Grid>
            {/* <Grid item xs={12} style={{ paddingBottom: '20px' }}>
                <div>

                  <FormControl component="fieldset">
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={this.state.gender || ""}
                      onChange={(event) => this.setState({ gender: event.target.value })}>
                      <Radio color="primary" value="F" control={<Radio />} label="Female" /><p>Female</p>
                      <Radio color="primary" value="M" control={<Radio />} label="Male" /><p>Male</p>
                      <Radio color="primary" value="O" control={<Radio />} label="Other" /><p>Others</p>
                    </RadioGroup>
                  </FormControl>
                </div>
              </Grid> */}
            <Grid item xs={12} style={{ paddingBottom: '20px' }}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="Password"
                value={state.password}
                autoComplete="current-password"
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    notchedOutline: classes.BorderOutline,
                  },
                }}
              />
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant='contained'
            color="primary"
            style={{ height: '45px' }}
            className={classes.submit}
            onClick={postDataHandler}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
        <Box mt={5} style={{ marginTop: '30vh' }} >
          <Copyright />
        </Box>
      </form>
    </Container >
  );
}


// export default SignUp;

export default SignUp;
