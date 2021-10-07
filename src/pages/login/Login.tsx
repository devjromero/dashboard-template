import {FC} from "react";
import {LoginPresenter} from "./LoginPresenter";
import {useDispatch} from "react-redux";

const Login:FC<any> = () => {
    const dispatch = useDispatch();
    return (
        <LoginPresenter />
    );
}
export default Login