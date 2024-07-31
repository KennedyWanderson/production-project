import { Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login"

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/login" Component={Login} />
                <Route path="/dashboard" Component={Login} />
                <Route path="/pieces/new" Component={Login} />
                <Route path="/pieces/:id/edit" Component={Login} />
                <Route path="/pieces/:id/edit" Component={Login} />
                <Route path="/login" Component={Login} />
                <Route path="/login" Component={Login} />

            </Switch>
        </Router>
    )
}