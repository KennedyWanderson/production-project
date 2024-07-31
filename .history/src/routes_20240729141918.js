import { Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login"
import PieceForm from "./Components/PieceForm";
import PieceDetails from "./Components/PieceDetails";

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/login" Component={Login} />
                <Route path="/dashboard" Component={Dashboard} />
                <Route path="/pieces/new" Component={PieceForm} />
                <Route path="/pieces/:id/edit" Component={PieceForm} />
                <Route path="/pieces/:id" Component={PieceDetails} />
                <Route path="/pieces" Component={Pie} />
                <Route path="/" exact Component={Login} />

            </Switch>
        </Router>
    )
}