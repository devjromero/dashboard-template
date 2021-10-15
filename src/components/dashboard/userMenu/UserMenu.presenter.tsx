import {FC, PropsWithChildren} from "react";
import UserProfile from "../../../resources/assets/media/profile.jpeg";
import {MenuActions} from "./MenuActions";

type UserMenuProps = {
    btnDropdownRef: any,
    popoverDropdownRef: any,
    handleTogglePopover: VoidFunction,
    dropdownPopoverShow: boolean,
}
export const UserMenuPresenter: React.FC<UserMenuProps> = (props:PropsWithChildren<UserMenuProps>) => {
    return (
        <div className="relative inline-flex align-middle w-full">
            <TriggerButton
                btnDropdownRef={props.btnDropdownRef}
                handleTogglePopover={props.handleTogglePopover}
            />
            <MenuActions
                dropdownPopoverShow={props.dropdownPopoverShow}
                popoverDropdownRef={props.popoverDropdownRef}
            />
        </div>
    );
};

type TriggerButtonProps = {
    btnDropdownRef: any,
    handleTogglePopover: ()=>void
}
const TriggerButton:FC<TriggerButtonProps> = (props: PropsWithChildren<TriggerButtonProps>) => {
    return (
        <button
            className   = {"rounded outline-none focus:outline-none  ease-linear transition-all duration-150"}
            type        = "button"
            ref         = {props.btnDropdownRef}
            onClick={props.handleTogglePopover}
        >
            <img
                className   = {'w-10 rounded-full object-cover shadow-xl'}
                src         = {UserProfile}
                alt         = {'UserProfile'}
            />
        </button>
    );
}