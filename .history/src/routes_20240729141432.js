import { Router, Switch, Route } from "react-router-dom";

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/login" Component={Log} />
            </Switch>
        </Router>
    )
}