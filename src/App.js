import react, {Component} from "react";
import Login from './componente/pages/login';
import "./App.css"
import { Card } from "reactstrap";

export default class App extends Component {
    render(){
        return(
            <div className="App">
                <Card>
                    <Login/>
                </Card>
            </div>
        );
    }
}
