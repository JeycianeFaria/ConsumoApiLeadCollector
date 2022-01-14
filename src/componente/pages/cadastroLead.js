import react, {Component} from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import Header from '../Header';


export default class CadastroLead extends Component {
    render(){
        return(
            <div>
                <Header title="Cadastro Leads"></Header>
                <hr/>
                <Form>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input type="text" id="nome" placeholder="Informe o seu nome: "/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" placeholder="Informe o seu email: "/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="descricao">Descrição</Label>
                        <Input type="text" id="descricao" placeholder="Informe a descrição: "/>
                    </FormGroup>
                    <Button color="primary" block>Entrar</Button>
                </Form>
            </div>
            
        );
    }
}