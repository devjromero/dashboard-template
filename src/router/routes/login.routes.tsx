import AppRoute from "../../domain/types/AppRoute.type";
import {lazy} from "react";

const loginRoutes:AppRoute[] = [
    {
        name:'Login',
        path:'/',
        exact: true,
        component:lazy(()=>import('./../../pages/login/Login')),
        icon:<h1>icon</h1>,
        isPrivate:false,
        noShowInMenu:true
    },
];

export default loginRoutes;