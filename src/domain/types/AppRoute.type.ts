import {FC, LazyExoticComponent} from "react";

declare type AppRoute = {
    name:string,
    path: string,
    exact: boolean,
    component: LazyExoticComponent<FC<any>>,
    icon?: any,
    isPrivate: boolean,
    noShowInMenu?: boolean
}

export default AppRoute;