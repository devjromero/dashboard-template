import {FC} from "react";
import LogoImage from './../../resources/assets/media/logo.svg';
import useTranslation from "../../utils/hooks/translation/useTranslation";
import InputGroup from "../forms/inputGroup/InputGroup";
import InputText from "../forms/inputs/InputText";
import {FormInputsType} from "../../domain/types/login/FormInputs.type";
import {FormikValues} from "formik";
import InputPassword from "../forms/inputs/InputPassword";
type Props = {
    values: FormInputsType | FormikValues,
    handleChange:   any,
    handleSubmit:   any,
    errors:         any,
    touched:        any,
}

const LoginForm:FC<Props> = props => {
    const { handleChange, values } = props;
    const {t} = useTranslation();
    return (
        <div className={'relative z-1 h-screen w-full flex flex-col p-4 justify-center lg:w-1/3'}>
        {/*START Header*/}
        <div className={'w-full flex flex-col items-center'}>
            <img
                className={'rounded-full w-3/12 lg:mb-4'}
                src={LogoImage}
                alt="Logo jromero"
            />
            <h1>{t('label.login')}</h1>
        </div>
        {/*END Header*/}
        {/*START FORM*/}
        <form action="" className={'w-full flex flex-col gap-4'}>
            <InputGroup
                label={t('label.email')}
            >
                <InputText
                    name        = {'email'}
                    value       = {values.email}
                    onChange    = {handleChange}
                    placeholder = {t('label.email.example')}
                />
            </InputGroup>

            <InputGroup
                label={t('label.password')}
            >
                <InputPassword
                    name        = {'password'}
                    value       = {values.password}
                    onChange    = {handleChange}
                    placeholder = {t('shh!!!')}
                />
            </InputGroup>
        </form>
        {/*END FORM*/}
        </div>
    );
}

export default LoginForm;