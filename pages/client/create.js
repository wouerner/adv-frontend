import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Component } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

export async function getServerSideProps(){

    const res = await axios.get(defaultEndpoint)
    const data = await res.data

    return {
        props: {
            data
        }
    }
}

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tel: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.value}
                <TextField 
                    id="standard-basic" 
                    variant="outlined"
                    label="nome" 
                    value={this.state.value} 
                    onChange={this.handleChange}
                />
                <TextField id="standard-basic" 
                    variant="outlined"
                    label="telefone" />
                <TextField id="standard-basic" 
                    variant="outlined"
                    label="endereço" />
                <TextField id="standard-basic" 
                    variant="outlined"
                    label="email" />
                <Button 
                    variant="contained" color="primary">
                    Salvar 
                </Button>
            </form>
        );
    }
}



export default function Client({ data }) {

    console.log(data);
  const classes = useStyles();

    async function submit(){
        const res = await axios.get(defaultEndpoint)
        const data = await res.data
        console.log(data);

    }



    return(
        <Container component="main" maxWidth="xs">
            <Typography variant="h3" gutterBottom>
                Novo Cliente 
            </Typography>
            <NameForm />
        </Container>
    ) 

}

