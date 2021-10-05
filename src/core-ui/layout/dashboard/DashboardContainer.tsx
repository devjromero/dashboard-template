import {DashboardContainerPresenter} from "./DashboardContainer.presenter";
import {PropsWithChildren} from "react";

const DashboardContainer:React.FC<any> = (props: PropsWithChildren<any>) => {
    return <DashboardContainerPresenter {...props} />
}

export default DashboardContainer;