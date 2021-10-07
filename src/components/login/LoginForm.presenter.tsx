import BackgroundImage from "./BackgroundImage";
import LoginForm from "./LoginForm";
import {FormInputsType} from "../../domain/types/login/FormInputs.type";
import {FormikValues} from "formik";
type Props = {
    values: FormInputsType | FormikValues,
    handleChange:   any,
    handleSubmit:   any,
    errors:         any,
    touched:        any,
}

const LoginFormPresenter:React.FC<Props> = props => {
    return (
        <div className={'h-screen w-screen flex flex-col lg:flex-row'}>
            {/*<LanguageSwitcher />*/}
            <BackgroundImage />
            <LoginForm {...props}/>
        </div>
    );
}

export default LoginFormPresenter;