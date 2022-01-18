/* eslint-disable react/jsx-no-undef */
import PrivateRoute from "./auth";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./componente/pages/login";
import Dashboard from "./componente/pages/dashboard"

const Routes= () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute path='/dashboard' component={Dashboard} />
        </Switch>
    </Router>
)

export default Routes;