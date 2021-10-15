import {PropsWithChildren} from "react";
import CommonPropsType from "./CommonProps.type";
import {LeftNavbar} from "./leftNavbar/LeftNavbar";
import {TopNavbar} from "./topNavbar/TopNavbar";

export const DashboardContainerPresenter: React.FC<CommonPropsType> = (props: PropsWithChildren<CommonPropsType>) => {
    return (
        <div className={'flex w-full h-screen bg-gray-200'}>
            <LeftNavbar {...props} />
            <div className={'w-full h-screen flex flex-col'}>
                <TopNavbar {...props} />
                <div className={'flex flex-col p-4'}>
                    {/*Bread Crumbs Here*/}
                    {props.children}
                </div>
            </div>
        </div>
    );
};