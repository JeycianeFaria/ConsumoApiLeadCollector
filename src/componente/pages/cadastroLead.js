import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import Header from "../Header";

export default class CadastroLead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.state ? this.state.message : '',
    };
  }

  save = () => {
    const url = "http://localhost:8080/leads";
    const data = {
      nome: this.nome,
      email: this.email,
      observacoes: this.observacoes,
    };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };

    fetch(url, requestInfo)
      .then((response) => {
        return response
      })
      .catch(e => {
        this.setState({ message: e.message });
      });
  };

  render() {
    return (
      <div>
        <Header title="Cadastro Leads"></Header>
        <hr/>
        <Form className="forms">
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input
              type="text"
              id="nome"
              onChange={(e) => (this.nome = e.target.value)}
              placeholder="Informe o seu nome: "
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="text"
              id="email"
              onChange={(e) => (this.email = e.target.value)}
              placeholder="Informe o seu email: "
            />
          </FormGroup>
          <FormGroup>
            <Label for="observacoes">Observações</Label>
            <textarea
              id="observacoes"
              onChange={(e) => (this.observacoes = e.target.value)}
              placeholder="Utilize esse campo para adicionar observações:  "
              className="form-control"
            ></textarea>
          </FormGroup>
          <Button color="primary" block onClick={this.signIn}>
            Entrar
          </Button>
        </Form>
      </div>
    );
  }
}
