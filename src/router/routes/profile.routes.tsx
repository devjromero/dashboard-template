import AppRoute from "../../domain/types/AppRoute.type";
import {lazy} from "react";
import {CgProfile} from "react-icons/all";

const profileRoutes:AppRoute[] = [
    {
        name:'menu.profile', // will translate
        path:'/',
        exact: true,
        component:lazy(()=>import('./../../pages/profile/Profile')),
        icon: <CgProfile size={20}/>,
        isPrivate:true
    },
];

export default profileRoutes;