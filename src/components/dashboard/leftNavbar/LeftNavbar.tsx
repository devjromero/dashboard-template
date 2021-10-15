import classNames from "classnames";
import CommonPropsType from "../CommonProps.type";
import {PropsWithChildren} from "react";
import {LeftNavbarHeader} from "../leftNavbarHeader/LeftNavbarHeader";
import {Menu} from "./menu/Menu";

export const LeftNavbar: React.FC<CommonPropsType> = (props:PropsWithChildren<CommonPropsType>) => {
    const { isOpenLeftNavbar } = props;
    return (
        <div className={
            classNames({
                'hidden lg:w-auto xl:w-auto lg:hover:w-4/12 xl:hover:w-2/12': !isOpenLeftNavbar,
                'absolute h-screen z-10 lg:relative lg:flex lg:w-4/12 xl:w-2/12' : isOpenLeftNavbar,
            },  ' lg:flex w-full p-4 bg-white ')
        }>
            <div className={'flex flex-col w-full group first:mb-8 gap-4'}>
                <LeftNavbarHeader {...props}/>
                <Menu {...props}/>
            </div>
        </div>
    );
};