import { FormikValues} from 'formik';
import LoginLanguageSwitcher from "./components/LoginLanguageSwitcher";
import BackgroundImage from "./components/BackgroundImage";
import LoginFormPresenter from "./components/LoginForm.presenter";
import {FormInputsType} from "../../domain/types/login/FormInputs.type";
import LoginForm from "./components/LoginForm";
type Props = {
    values: FormInputsType | FormikValues,
    handleChange:   any,
    handleSubmit:   any,
    errors:         any,
    touched:        any,
    isSubmitting: boolean
}
export const LoginPresenter: React.FC<Props> = props => {
    return (
        <div className={'relative h-screen w-screen flex flex-col lg:flex-row'}>
            <LoginLanguageSwitcher />
            <BackgroundImage />
            <LoginForm {...props}/>
        </div>
    );
};

