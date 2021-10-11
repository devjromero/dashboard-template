import BackgroundImage from "./BackgroundImage";
import LoginFormPresenter from "./LoginForm.presenter";
import {FormInputsType} from "../../../domain/types/login/FormInputs.type";
import {FormikValues} from "formik";
import LoginLanguageSwitcher from "./LoginLanguageSwitcher";
type Props = {
    values: FormInputsType | FormikValues,
    handleChange:   any,
    handleSubmit:   any,
    errors:         any,
    touched:        any,
    isSubmitting:   boolean
}

const LoginForm:React.FC<Props> = props => {
    return (<LoginFormPresenter {...props}/>);
}

export default LoginForm;