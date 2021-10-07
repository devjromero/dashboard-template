import {InputPropsType} from "../../../domain/types/InputProps.type";
import {FC, useState} from "react";

const InputPassword:React.FC<InputPropsType> = props => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const getLabel = () => {
        return showPassword ? 'Hide':'Show';
    }
    return (
        <div className={'relative w-full'}>
            <Switcher show={true}>{getLabel()}</Switcher>
        </div>
    );
}

type SwitcherProp = {
    show: boolean
}
const Switcher:FC<SwitcherProp> = props => {
    return (
        <div className={'absolute right-0'}>
            <p className={'text-xs'}>{props.children}</p>
        </div>
    );
}

export default InputPassword;