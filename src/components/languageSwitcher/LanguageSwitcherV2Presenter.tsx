import usePopover from "../../hooks/popover/usePopover";
import classNames from "classnames";
import EnglishFlag from './../../resources/assets/media/flag_usa.jpg';

export const LanguageSwitcherV2Presenter: React.FC<any > = props => {
    const {
        btnDropdownRef,
        dropdownPopoverShow,
        handleTogglePopover,
        popoverDropdownRef
    } = usePopover();

    return (
        <div className={'relative inline-flex align-middle w-auto'}>

                <div
                    className   = {"flex items-center gap-1"}
                    ref         = {btnDropdownRef}
                    onClick={handleTogglePopover}
                >
                    <img src={EnglishFlag} alt="english" className={'h-3 w-auto'}/>
                    <p className={'text-sm'}>English</p>
                </div>
            <div
                ref={popoverDropdownRef}
                className={
                    classNames({
                        'block': dropdownPopoverShow,
                        'hidden': !dropdownPopoverShow,
                    },'pt-2')
                }
            >
                <div className={'flex bg-white'}>
                    <img src={EnglishFlag} alt="english" className={'h-3 w-auto'}/>
                    <p className={'text-sm'}>English</p>
                </div>
            </div>
        </div>
    );
};