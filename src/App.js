import react, {Component} from "react";
//import Login from './componente/pages/login';
import "./App.css"
import { } from "reactstrap";
import CadastroLead from "./componente/pages/cadastroLead";
import Card from "./componente/Card";

export default class App extends Component {
    render(){
        return(
            <div className="App">
                <Card>
                    <CadastroLead></CadastroLead>
                </Card>
            </div>
        );
    }
}
