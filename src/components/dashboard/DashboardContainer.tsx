import {DashboardContainerPresenter} from "./DashboardContainer.presenter";
import {PropsWithChildren, useState} from "react";

const DashboardContainer:React.FC<any> = (props: PropsWithChildren<any>) => {
    const [isOpenLeftNavbar, setIsOpenLeftNavbar] = useState<boolean>(true);
    return (
        <DashboardContainerPresenter
            isOpenLeftNavbar={isOpenLeftNavbar}
            setIsOpenLeftNavbar={setIsOpenLeftNavbar}
            {...props}
        />
    );
}

export default DashboardContainer;