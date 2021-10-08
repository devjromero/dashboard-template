import {FC, useEffect} from "react";
import LogoImage from './../../resources/assets/media/logo.svg';
import useTranslation from "../../utils/hooks/translation/useTranslation";
import InputGroup from "../forms/inputGroup/InputGroup";
import InputText from "../forms/inputs/InputText";
import {FormInputsType} from "../../domain/types/login/FormInputs.type";
import {FormikValues} from "formik";
import InputPassword from "../forms/inputs/InputPassword";
import Button from "../forms/buttons/Button";
import {Link} from 'react-router-dom';
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
    // const capsLock = useCapsLock();
    // useEffect(() => {
    //     console.log(capsLock)
    // }, [capsLock]);

    return (
        <div className={'relative z-1 h-screen w-full flex flex-col p-4 justify-center lg:w-1/3 gap-1 '}>
        {/*START Header*/}
        <div className={'relative w-full h-2/5 flex flex-col justify-center items-center gap-4'}>
            <img
                className={'rounded-full w-3/12 lg:w-4/12 lg:mb-4'}
                src={LogoImage}
                alt="Logo jromero"
            />
            <h1 className={'text-md lg:text-xl'}>{t('label.login')}</h1>
        </div>
        {/*END Header*/}
        {/*START FORM*/}
        <form action="" className={'w-full flex flex-col gap-4 justify-start flex-1'}>

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
            <p className={'text-xs lg:text-md'}>{t('label.forgotPassword?')}</p>

            <Button onClick={(e:any)=>{}}>{t('label.doLogin')}</Button>
            <Button
                type={'secondary'}
                onClick={(e:any)=>{}}
            >
                {t('label.createAnAccount')}
            </Button>

            <p className={'text-xs lg:text-md'}>{t('label.watchOurTutorials')} <Link to={'/login#'}>{t('here')}</Link></p>

        {/*    forgot password*/}
        {/*create and account*/}
        {/*watch video tutorials*/}
        </form>
        {/*END FORM*/}
        </div>
    );
}

export default LoginForm;