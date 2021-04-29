import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
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
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="nome" />
        <TextField id="standard-basic" label="telefone" />
        <TextField id="standard-basic" label="endereço" />
        <TextField id="standard-basic" label="email" />
        <Button variant="contained" color="primary">
          Salvar 
        </Button>
      </form>
      </Container>
  ) 

}

