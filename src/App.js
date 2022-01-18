import react, { Component } from "react";
import "./App.css";
import { } from "reactstrap";
import Card from "./componente/Card";
import Routes from "./routes";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Card>
          <Routes></Routes>
        </Card>
      </div>
    );
  }
}
