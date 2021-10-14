import AppRoute from "../../domain/types/AppRoute.type";
import errorRoutes from "./error.routes";
import loginRoutes from "./login.routes";
import profileRoutes from "./profile.routes";

const appRoutes:AppRoute[] = [

    ...profileRoutes,
    ...loginRoutes,
    ...errorRoutes,
];

export default appRoutes;