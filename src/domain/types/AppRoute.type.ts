import {FC, LazyExoticComponent} from "react";

declare type AppRoute = {
    name:string,
    path: string,
    exact: boolean,
    component: LazyExoticComponent<FC<any>>,
    icon?: React.FunctionComponent,
    isPrivate: boolean,

}

export default AppRoute;