import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import IndexView from '../IndexView/IndexView';
import userStateModel from '../../Models/userModel'
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';

function Copyright() {
  return (
    <Typography variant="body1" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = theme => ({
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
});


class SignUp extends Component {

  constructor() {
    super();

    this.state = {
      gender: ""
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }


  state = {
    firstName: "",
    lastName: '',
    emailId: '',
    gender: '',
    password: '',
    TextField: "",

  }
  // state = {
  //   posts: []
  // }

  // componentDidMount() {
  //   axios.get('http://localhost:62789/api/UserRegistration/Index')
  //     .then(response => {
  //       this.setState({ posts: response.data })
  //       console.log(response);
  //     });
  // }


  onChangeValue(event) {
    console.log(event.target.value);
  }

  postDataHandler = () => {
    debugger;
    const updatePost = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      gender: this.state.gender,
      password: this.state.password,
    };
    axios.post('http://localhost:62789/api/UserRegistration/GetSignupData', updatePost)
      .then(response => {
        debugger;
        console.log(response);
      });

  }

  render() {
    // const posts = this.state.posts.map(post => {
    //   return <IndexView key={post.userId} data={post.emailId} />;
    // });


    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="md" >

        <CssBaseline />
        {/* {posts} */}
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <form className={classes.form} noValidate>
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
                  value={this.state.firstName || ""}
                  onChange={(event) => this.setState({ firstName: event.target.value })}
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
                  value={this.state.lastName || ""}
                  onChange={(event) => this.setState({ lastName: event.target.value })}
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
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={this.state.emailId || ""}
                  onChange={(event) => this.setState({ emailId: event.target.value })}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      notchedOutline: classes.BorderOutline,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} style={{ paddingBottom: '20px' }}>
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
              </Grid>
              <Grid item xs={12} style={{ paddingBottom: '20px' }}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={this.state.password || ""}
                  onChange={(event) => this.setState({ password: event.target.value })}
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
              onClick={this.postDataHandler}
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
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}


// export default SignUp;

export default withStyles(useStyles)(SignUp);
