import CommonPropsType from "../CommonProps.type";
import {PropsWithChildren} from "react";
import Logo from './../../../resources/assets/media/logo.svg';
import classNames from "classnames";
import {AiFillPushpin, AiOutlinePushpin, CgClose} from "react-icons/all";

export const LeftNavbarHeader: React.FC<CommonPropsType> = (props:PropsWithChildren<CommonPropsType>) => {
    const toggleLeftNavbar = (e:any)=>props.setIsOpenLeftNavbar(!props.isOpenLeftNavbar);
    return (
        <div className={'w-full flex justify-between items-center'}>
            <div className={'w-full flex items-center flex-1'}>
                <img
                    src = {Logo}
                    alt = "your logo"
                    className = {classNames({
                        'mr-4': props.isOpenLeftNavbar
                    }) +
                    ' rounded-full h-auto w-8 overflow-hidden '}
                />
                <span className={classNames({
                    'hidden': !props.isOpenLeftNavbar,
                },' group-hover:block')}>
                    &nbsp;
                    &nbsp;
                </span>
                <p className={classNames({
                    'lg:hidden group-hover:block': !props.isOpenLeftNavbar
                })+' '}>Jromero</p>
            </div>

            <div className={'h-full lg:hidden'}>
                <CgClose
                    onClick     = {toggleLeftNavbar}
                    className   = {'cursor-pointer'}
                />
            </div>
            <div className={classNames('h-full hidden',{
                'lg:flex  items-center': props.isOpenLeftNavbar,
                'hidden group-hover:flex  group-hover:items-center': !props.isOpenLeftNavbar,
            })+
            ' '
            }>
                {
                    props.isOpenLeftNavbar
                        ? (
                            <AiFillPushpin
                                onClick     = {toggleLeftNavbar}
                                className   = {'cursor-pointer'}
                            />
                        )
                        : (
                            <AiOutlinePushpin
                                onClick     = {toggleLeftNavbar}
                                className   = {'cursor-pointer'}
                            />
                        )
                }
            </div>

        </div>
    );
};