declare type AppRoute = {
    name:string,
    path: string,
    exact: boolean,
    component: React.FunctionComponent,
    icon?: React.FunctionComponent,
    isPrivate: boolean,

}

export default AppRoute;