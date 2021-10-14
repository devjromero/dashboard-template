import classNames from "classnames";

type Props = {
    type?: string,
    onClick: any,
    disabled?: boolean
}

const Button: React.FC<Props> = props => {
    //opacity-50
    return (
        <button
            disabled={props.disabled}
            className={classNames(`w-full  flex justify-center py-2 px-2  rounded shadow-md ${getStyle(props.type)}`,{
                'opacity-50 cursor-not-allowed': props.disabled,
            })}
            onClick={props.onClick}
            type={'submit'}
        >
            {props.children}
        </button>
    );
};

const getStyle = (type?:string):string => {
    if (!type || type === 'primary'){
        return 'bg-blue-400 text-white';
    }
    return 'bg-blue-100 text-gray-700';
}

export default Button;