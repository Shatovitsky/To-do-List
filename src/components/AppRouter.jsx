import React, {useContext} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import {privateRoutes} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";
import {publicRoutes } from "../routes";
import {LOGIN_ROUTE} from "../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={MAIN_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
}

export default AppRouter