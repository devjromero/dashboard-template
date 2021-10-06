import AppRoute from "../../domain/types/AppRoute.type";
import errorRoutes from "./error.routes";
import loginRoutes from "./login.routes";

const appRoutes:AppRoute[] = [

    ...loginRoutes,
    ...errorRoutes,
];

export default appRoutes;