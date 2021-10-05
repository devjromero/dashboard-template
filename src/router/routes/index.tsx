import AppRoute from "../../domain/types/AppRoute.type";
import errorRoutes from "./error.routes";
import loginRoutes from "./login.routes";

const appRoutes:AppRoute[] = [
    {
        name:'Dashboard',
        path:'/dashboard',
        exact: true,
        component:()=><h1>Dashboard baby</h1>,
        icon:()=><h1>icon</h1>,
        isPrivate:true
    },
    ...errorRoutes,
    ...loginRoutes
];

export default appRoutes;