import { Router, Switch, Route } from "react-router-dom";
import Login from "v

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/login" Component={Login} />
            </Switch>
        </Router>
    )
}