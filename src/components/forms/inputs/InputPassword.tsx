import {InputPropsType} from "../../../domain/types/InputProps.type";
import {FC, useState} from "react";
import classNames from "classnames";
import OnChangeInputFunctionType from "../../../domain/types/OnChangeInputFunction.type";

const InputPassword:React.FC<InputPropsType> = props => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const getLabel = () => {
        return showPassword ? 'Hide':'Show';
    }
    const handleShowPassword:OnChangeInputFunctionType = (e)=>{
        e.preventDefault();
        setShowPassword(!showPassword);
    }
    const style = 'border-gray-300 placeholder-gray-300 text-gray-600';
    return (
        <div className={'relative w-full flex items-center'}>
            <Switcher
                handleShow={handleShowPassword}
            >
                {getLabel()}
            </Switcher>
            <input
                className={
                    classNames('w-full rounded leading-tight focus:outline-none focus:shadow-outline ',style,{
                        'border-red-400': props.isAnError
                    })
                }
                type={showPassword?'text':'password'}
                placeholder={props.placeholder}
                value={props.value}
                onChange ={props.onChange}
                name={props.name}
            />
        </div>
    );
}

type SwitcherProp = {
    handleShow: any
}
const Switcher:FC<SwitcherProp> = props => {
    const style = 'bg-blue-200 text-gray-700 hover:bg-blue-300';
    return (
        <button
            className={`absolute right-0 mr-2  p-1 rounded cursor-pointer ${style}`}
            onClick={props.handleShow}
        >
            <p className={'text-xs'}>{props.children}</p>
        </button>
    );
}

export default InputPassword;