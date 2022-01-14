import react, {Component} from "react";
//import Login from './componente/pages/login';
import "./App.css"
import { Card } from "reactstrap";
import CadastroLead from "./componente/pages/cadastroLead";

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
