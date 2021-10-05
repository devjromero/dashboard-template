import {PropsWithChildren} from "react";

export const DashboardContainerPresenter: React.FC<any> = (props: PropsWithChildren<any>) => {
    return (
        <div className={'bg-red-400 w-screen h-screen'}>
            {props.children}
        </div>
    );
};