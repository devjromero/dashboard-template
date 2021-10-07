import {useDispatch} from "react-redux";
import actions from "../../store/actions";

export const LoginPresenter: React.FC<any> = props => {
    const dispatch = useDispatch();
    return (
        <>
            <button className={'p-2 rounded bg-blue-300'}
                    onClick={(e)=>dispatch(actions.tryAuthenticateUser)}
            >
                Dispatch
            </button>
        </>
    );
};