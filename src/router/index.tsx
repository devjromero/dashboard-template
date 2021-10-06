import {FC, PropsWithChildren, Suspense} from "react";
import {Switch, Route} from 'react-router-dom';
import AppRoute from "../domain/types/AppRoute.type";
import appRoutes from "./routes";
import Loading from "../components/loading";

type RoutesProps = {
    loadPrivatesRoutes: boolean
}

export const Routes:FC<RoutesProps> = (props: PropsWithChildren<RoutesProps>) => {
    const routes: AppRoute[] = appRoutes.filter((route: AppRoute) => route.isPrivate === props.loadPrivatesRoutes);
    return (
        <Suspense fallback={<Loading/>}>
            <Switch>
                {routes.map(routeRenderFunction)}
            </Switch>
        </Suspense>
    );
}

const routeRenderFunction = (route: AppRoute, key: number) => (
    <Route
        key={`route-${key}`}
        exact={route.exact}
        path={route.path}
        component={route.component}
    />
);
