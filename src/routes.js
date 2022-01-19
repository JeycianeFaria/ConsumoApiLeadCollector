/* eslint-disable react/jsx-no-undef */
import PrivateRoute from "./auth";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./componente/pages/login";
import Dashboard from "./componente/pages/dashboard"
import CadastroLead from "./componente/pages/cadastroLead";

const Routes= () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route exact path='/landing' component={CadastroLead}/>
        </Switch>
    </Router>
)

export default Routes;