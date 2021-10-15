import {createRef, RefObject, useState} from "react";
import {createPopper} from "@popperjs/core";

type usePopoverType = {
    dropdownPopoverShow: boolean,
    btnDropdownRef: RefObject<any>
    popoverDropdownRef:RefObject<any>
    handleTogglePopover: VoidFunction
}
type Hook = () => usePopoverType;
const usePopover:Hook = () => {
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef:any = createRef();
    const popoverDropdownRef:any = createRef();

    const handleTogglePopover = () => {
        console.log('working!!')
        if (!dropdownPopoverShow){
            createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
                placement: "bottom-start"
            });
        }
        setDropdownPopoverShow(!dropdownPopoverShow);
    }
    return {
        dropdownPopoverShow,
        btnDropdownRef,
        popoverDropdownRef,
        handleTogglePopover
    }
}

export default usePopover;