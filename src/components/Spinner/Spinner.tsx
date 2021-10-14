import SpinnerSvg from './../../resources/assets/media/spinner.svg';
type Props = {
    className?: string
}
export const Spinner: React.FC<Props> = props => {
    return (
        <div className={`w-5 ${props.className}`}>
            <img src={SpinnerSvg} alt={"loading..."} className={'animate-spin'}/>
        </div>
    );
};