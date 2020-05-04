import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import CepPage from "../pages/CepPage";
import Dashboard from "../pages/Dashboard";
import ListStores from "../pages/ListStores";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} isPrivate={false} />
            <Route path="/signup" exact component={SignUp} isPrivate={false} />
            <Route path="/cep" exact component={CepPage} isPrivate={true} />
            <Route
                path="/dashboard/:id"
                exact
                component={Dashboard}
                isPrivate={true}
            />
            <Route
                path="/stores/:cep"
                component={ListStores}
                isPrivate={true}
            />
        </Switch>
    );
};

export default Routes;
