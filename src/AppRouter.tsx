import {FC} from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "./router";
import DashboardContainer from "./core-ui/layout/dashboard/DashboardContainer";
import useTranslation from "./utils/hooks/translation/useTranslation";
import {useSelector} from "react-redux";
import {getIsAuthenticated} from "./store/auth/auth.selectors";
const AppRouter:FC<any> = () => {
    const isAuthenticated = useSelector(getIsAuthenticated);
    return (
        <BrowserRouter>
            {
                isAuthenticated ? (<PrivateRoutes/>) : (<PublicRoutes/>)
            }
        </BrowserRouter>
    );
}

const PublicRoutes:FC<any> = () => {
    return (<Routes loadPrivatesRoutes={false}/>);
}

const PrivateRoutes:FC<any> = () => {
    const { t } = useTranslation();
    return (
        <DashboardContainer>
            <Routes loadPrivatesRoutes={true}/>
            {t('welcome')}
        </DashboardContainer>
    );
}

export default AppRouter;