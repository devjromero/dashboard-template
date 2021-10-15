import classNames from "classnames";
import {Link} from "react-router-dom";
import {FC, PropsWithChildren} from "react";

type Props = {
    popoverDropdownRef: any,
    dropdownPopoverShow:boolean,
    dispatchLogout: VoidFunction,
    t:any
}
export const MenuActionsPresenter: React.FC<Props> = (props:PropsWithChildren<Props>) => {
    const {t} = props;
    return (
        <div
            ref={props.popoverDropdownRef}
            className={
                classNames({
                    'block': props.dropdownPopoverShow,
                    'hidden': !props.dropdownPopoverShow,
                },'pt-2')
            }
        >
            <MenuItem><Link to="/">{t('menu.profile')}</Link></MenuItem>
            <MenuItem>
                <button
                    className={'flex items-center gap-1'}
                    onClick={props.dispatchLogout}
                >
                    {/*<RiLogoutBoxRLine size={20}/>*/}
                    {t('menu.logout')}
                </button>
            </MenuItem>
        </div>
    );
};

const MenuItem:FC<any> = (props:PropsWithChildren<any>) => {
    return (
        <div className={'bg-white rounded text-sm py-2 px-4 font-normal block w-full whitespace-nowrap hover:bg-blue-100'}>
            <div>
                {props.children}
            </div>
        </div>
    );
}