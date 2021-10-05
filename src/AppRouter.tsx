import {FC} from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "./router";
import DashboardContainer from "./core-ui/layout/dashboard/DashboardContainer";
const AppRouter:FC<any> = () => {
    const isAuth: boolean = false;
    return (
        <BrowserRouter>
            {
                isAuth ? (<PrivateRoutes/>) : (<PublicRoutes/>)
            }
        </BrowserRouter>
    );
}

const PublicRoutes:FC<any> = () => {
    return (<Routes loadPrivatesRoutes={false}/>);
}

const PrivateRoutes:FC<any> = () => {
    return (
        <DashboardContainer>
            <Routes loadPrivatesRoutes={true}/>
        </DashboardContainer>
    );
}

export default AppRouter;