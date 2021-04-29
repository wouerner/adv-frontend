import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {

function handleClick(e) {    
    e.preventDefault();    
    console.log('O link foi clicado.');  
}


  const classes = useStyles();
  return(
          <Container component="main" maxWidth="xs">
               <div className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
          />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
          />
          <Link href={'/client/client'}  prefetch>
              <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
              >
                  Sign In
              </Button>
          </Link>
  </form>
                   </div>
      </Container>
) 

}

