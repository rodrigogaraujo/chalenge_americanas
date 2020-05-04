import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import CepPage from "../pages/CepPage";
import Dashboard from "../pages/Dashboard";
import ListStores from "../pages/ListStores";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/cep" exact component={CepPage} />
            <Route path="/dashboard/:id" exact component={Dashboard} />
            <Route path="/stores" exact component={ListStores} />
        </Switch>
    );
};

export default Routes;
