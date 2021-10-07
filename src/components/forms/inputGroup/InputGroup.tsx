
type Props = {
    label:      string,
    feedback?:  string,
    error?:     string,
    className?: string,
    callActionLabel?: string,
}

const labelInputGroupStyle = 'text-gray-600 text-xs';
const InputGroup: React.FC<Props> = props => {
    const { feedback, error, label, callActionLabel } = props;
    return (
        <div className={`w-full flex flex-col justify-start gap-1`}>
            <div className={`w-full flex justify-between ${labelInputGroupStyle}`}>
                <label htmlFor="" className={''}>{label}</label>
            </div>
            {props.children}
            { feedback && <Feedback feedback={feedback}/>}
            { error && <Error error={error}/>}
        </div>
    );
};
type FeedbackProps = {
    feedback:string
}
const Feedback:React.FC<FeedbackProps> = (props) => {
    const style = 'text-gray-400 text-xs italic';
    return (<p className={`${style}`}>{props.feedback}</p>)
}
type ErrorsProps = {
    error:string
}
const Error:React.FC<ErrorsProps> = (props) => {
    const style = 'text-red-500 text-xs italic';
    return (<p className={`${style}`}>{props.error}</p>)
}


export default InputGroup;