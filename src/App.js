import react, { Component } from "react";
//import Login from "./componente/pages/login";
import "./App.css";
import { } from "reactstrap";
import Card from "./componente/Card";
import CadastroLead from "./componente/pages/cadastroLead";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Card>
          <CadastroLead></CadastroLead>
        </Card>
      </div>
    );
  }
}
