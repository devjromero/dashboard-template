import {FC, PropsWithChildren} from "react";
import {Switch, Route} from 'react-router-dom';
import AppRoute from "../domain/types/AppRoute.type";
import appRoutes from "./routes";

type RoutesProps = {
    loadPrivatesRoutes: boolean
}

export const Routes:FC<RoutesProps> = (props: PropsWithChildren<RoutesProps>) => {
    const routes: AppRoute[] = appRoutes.filter((route: AppRoute) => route.isPrivate == props.loadPrivatesRoutes);
    return (
        <Switch>
            {
                routes.map(routeRenderFunction)
            }
        </Switch>
    );
}

const routeRenderFunction = (route: AppRoute) => (
    <Route
        exact={route.exact}
        path={route.path}
        component={route.component}
    />
);
