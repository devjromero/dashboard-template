import AppRoute from "../../domain/types/AppRoute.type";

const loginRoutes:AppRoute[] = [
    {
        name:'Login',
        path:'/login',
        exact: true,
        component:()=><h1>Login</h1>,
        icon:()=><h1>icon</h1>,
        isPrivate:false
    },
];

export default loginRoutes;