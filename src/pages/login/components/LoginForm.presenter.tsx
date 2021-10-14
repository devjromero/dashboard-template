import {FC, useEffect} from "react";
import LogoImage from '../../../resources/assets/media/logo.svg';
import useTranslation from "../../../hooks/translation/useTranslation";
import InputGroup from "../../../components/forms/inputGroup/InputGroup";
import InputText from "../../../components/forms/inputs/InputText";
import {FormInputsType} from "../../../domain/types/login/FormInputs.type";
import {FormikValues} from "formik";
import InputPassword from "../../../components/forms/inputs/InputPassword";
import Button from "../../../components/forms/buttons/Button";
import {Link} from 'react-router-dom';
import {Spinner} from "../../../components/Spinner/Spinner";
type Props = {
    values: FormInputsType | FormikValues,
    handleChange:   any,
    handleSubmit:   any,
    errors:         any,
    touched:        any,
    isSubmitting:   boolean
}

const LoginFormPresenter:FC<Props> = props => {
    const { handleChange, values } = props;
    const {t} = useTranslation();
    useEffect(() => {
        console.log(props.errors)
    }, [props.errors]);

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
        <form
            action=""
            className={'w-full flex flex-col gap-4 justify-start flex-1'}
            onSubmit={props.handleSubmit}
        >

            <InputGroup
                label={t('label.email')}
                error={props.errors?.email}
            >
                <InputText
                    name        = {'email'}
                    value       = {values.email}
                    onChange    = {handleChange}
                    placeholder = {t('label.email.example')}
                    isAnError={!!props.errors?.email}
                />
            </InputGroup>

            <InputGroup
                label={t('label.password')}
                error={props.errors?.password}
            >
                <InputPassword
                    name        = {'password'}
                    value       = {values.password}
                    onChange    = {handleChange}
                    placeholder = {t('shh!!!')}
                    isAnError={!!props.errors?.password}
                />
            </InputGroup>
            <p className={'text-xs lg:text-md'}>{t('label.forgotPassword?')}</p>
            {/*<p className={'animate-spin bg-red-400 w-10'}>hola</p>*/}

            <Button
                disabled={props.isSubmitting}
                onClick={(e:any)=>{}}
            >
                {
                    props.isSubmitting
                        ? <Spinner/>
                        :t('label.doLogin')
                }
            </Button>
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

export default LoginFormPresenter;