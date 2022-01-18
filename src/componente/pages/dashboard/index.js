import react, { Component } from "react";
import {
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Card,
} from "reactstrap";

class ListLead extends Component {
  render() {
    return (
      <Table className="table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Obs.</th>
            <th>Actions</th>
          </tr>
        </thead>
      </Table>
    );
  }
}
class FormLead extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <div className="form-row">
            <Label for="nome">Nome</Label>
            <Input
              id="nome"
              type="text"
              placeholder="Informe o nome do lead"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="form-row">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="text"
              placeholder="Informe o email do lead"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="form-row">
            <Label for="observacoes">Observações</Label>
            <Input
              id="observacoes"
              type="text"
              placeholder="Informe aqui as observacoes"
            />
          </div>
        </FormGroup>
        <Button color="primary" block >Atualizar</Button>
      </Form>
    );
  }
}
class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 my-3">
              <h2 className="font-weight-bold text-center" >ATUALIZAR LEADS</h2>
              <FormLead />
          </div>
          <div className="col-md-6 my-3">
            <h2 className="font-weight-bold text-center" >LISTA LEADS</h2>
            <ListLead />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
