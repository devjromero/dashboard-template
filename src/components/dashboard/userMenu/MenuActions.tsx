import classNames from "classnames";
import {Link} from "react-router-dom";
import {FC, PropsWithChildren} from "react";
import useTranslation from "../../../hooks/translation/useTranslation";
import {useDispatch} from "react-redux";
import actions from "../../../store/actions";
import {MenuActionsPresenter} from "./MenuActions.presenter";

type Props = {
    dropdownPopoverShow: boolean,
    popoverDropdownRef: any
}

export const MenuActions: React.FC<Props> = (props:PropsWithChildren<Props>) => {
    const {t}=useTranslation();
    const dispatch = useDispatch();
    const dispatchLogout = () => dispatch(actions.logout);

    return (
        <MenuActionsPresenter
            dropdownPopoverShow={props.dropdownPopoverShow}
            popoverDropdownRef={props.popoverDropdownRef}
            dispatchLogout={dispatchLogout}
            t={t}
        />
    );
};

