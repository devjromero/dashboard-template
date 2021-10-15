import {FC, PropsWithChildren} from "react";
import appRoutes from "../../../../router/routes";
import AppRoute from "../../../../domain/types/AppRoute.type";
import classNames from "classnames";
import CommonPropsType from "../../CommonProps.type";
import {NavLink} from 'react-router-dom';
import useTranslation from "../../../../hooks/translation/useTranslation";
export const Menu: React.FC<CommonPropsType> = (props:PropsWithChildren<CommonPropsType>) => {
    return (
        <>
            {
                appRoutes.map((route:AppRoute)=>{
                    return !route?.noShowInMenu && <Item {...props} route={route}/>
                })
            }
        </>
    );
};

type ItemProp = CommonPropsType & {
    route:AppRoute
}
const Item:FC<ItemProp> = (props: PropsWithChildren<ItemProp>) => {
    const {t} = useTranslation();
    return (
        <div className={'w-full flex justify-between items-center hover:cursor-pointer'}>
            <NavLink
                to={props.route.path}
                activeClassName={'bg-blue-200 w-full p-2 rounded'}
            >
                <div className={
                    classNames('w-full flex items-center flex-1  ',{
                        'group-hover:justify-start': !props.isOpenLeftNavbar,
                    })
                }>
                    <div className={'flex justify-center'}>
                        {props.route.icon}
                    </div>
                    <span className={classNames({
                        'hidden': !props.isOpenLeftNavbar,
                    },' group-hover:block')}>
                    &nbsp;
                        &nbsp;
                </span>
                    <p className={classNames({
                        'lg:hidden group-hover:block': !props.isOpenLeftNavbar
                    })+' '}>{t(props.route.name)}</p>
                </div>

                <div className={'h-full lg:hidden'}>
                    {'>'}
                </div>
            </NavLink>
        </div>
    );
}