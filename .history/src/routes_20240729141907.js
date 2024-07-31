import { Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login"
import PieceForm from "./Components/PieceForm";

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/login" Component={Login} />
                <Route path="/dashboard" Component={Dashboard} />
                <Route path="/pieces/new" Component={PieceForm} />
                <Route path="/pieces/:id/edit" Component={PieceForm} />
                <Route path="/pieces/:id" Component={Pi} />
                <Route path="/pieces" Component={Login} />
                <Route path="/" exact Component={Login} />

            </Switch>
        </Router>
    )
}