import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function Client() {
  const classes = useStyles();
  return(
      <Container component="main" maxWidth="xs">
          <Typography variant="h3" gutterBottom>
              Novo Usuário 
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" 
                  fullWidth
                  label="email" />
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
              <Button variant="contained" color="primary">
                  Salvar 
              </Button>
          </form>
      </Container>
  ) 

}

