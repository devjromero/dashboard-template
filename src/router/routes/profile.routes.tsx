import AppRoute from "../../domain/types/AppRoute.type";
import {lazy} from "react";

const profileRoutes:AppRoute[] = [
    {
        name:'Profile',
        path:'/',
        exact: true,
        component:lazy(()=>import('./../../pages/profile/Profile')),
        icon:()=><h1>icon</h1>,
        isPrivate:true
    },
];

export default profileRoutes;