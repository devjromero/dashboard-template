import AppRoute from "../../domain/types/AppRoute.type";
import {lazy} from "react";

const errorRoutes:AppRoute[] = [
    {
        name:'Not found',
        path:'*',
        exact: false,
        component:lazy(()=>import('../../pages/NotFound/PrivateNotFound')),
        icon:()=><h1>icon</h1>,
        isPrivate:true
    },
    {
        name:'Not found',
        path:'*',
        exact: false,
        component:lazy(()=>import('../../pages/NotFound/PublicNotFound')),
        icon:()=><h1>icon</h1>,
        isPrivate:false
    },
];

export default errorRoutes;