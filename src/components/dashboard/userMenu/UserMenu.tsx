import {createRef, useState} from "react";
import {createPopper} from "@popperjs/core";
import {UserMenuPresenter} from "./UserMenu.presenter";
export const UserMenu: React.FC<any> = props => {
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef:any = createRef();
    const popoverDropdownRef:any = createRef();

    const handleTogglePopover = () => {
        if (!dropdownPopoverShow){
            createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
                placement: "bottom-start"
            });
        }
        setDropdownPopoverShow(!dropdownPopoverShow);
    }
    return (
        <UserMenuPresenter
            popoverDropdownRef={popoverDropdownRef}
            dropdownPopoverShow={dropdownPopoverShow}
            handleTogglePopover={handleTogglePopover}
            btnDropdownRef={btnDropdownRef}
        />
    );
};


