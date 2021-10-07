import classNames from "classnames";
import {InputPropsType} from "../../../domain/types/InputProps.type";

const InputText:React.FC<InputPropsType> = props => {
    const  baseStyle = 'w-full rounded leading-tight focus:outline-none focus:shadow-online';
    const style = 'border border-gray-300 placeholder-gray-300 text-gray-600';
    return (
        <input
            type={'text'}
            className={classNames(baseStyle, style, {
                'border-red-400': props.isAnError
            })}
            value={props.value}
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onChange}
        />
    );
}

export default InputText;