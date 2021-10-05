import AppRoute from "../../domain/types/AppRoute.type";

const errorRoutes:AppRoute[] = [
    {
        name:'Not found',
        path:'*',
        exact: false,
        component:()=><h1>404 private</h1>,
        icon:()=><h1>icon</h1>,
        isPrivate:true
    },
    {
        name:'Not found',
        path:'*',
        exact: false,
        component:()=><h1>404 public</h1>,
        icon:()=><h1>icon</h1>,
        isPrivate:false
    },
];

export default errorRoutes;