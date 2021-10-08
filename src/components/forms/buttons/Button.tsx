type Props = {
    type?: string,
    onClick: any
}

const Button: React.FC<Props> = props => {

    return (
        <button
            className={`w-full  py-2 px-2  rounded shadow-md ${getStyle(props.type)}`}
            onClick={props.onClick}
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