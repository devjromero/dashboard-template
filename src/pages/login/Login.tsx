import {FC} from "react";
import {LoginPresenter} from "./LoginPresenter";
import {Formik, FormikValues} from "formik";
import {FormPropertiesType} from "../../domain/types/FormProperties.type";
import LoginSchema from "../../domain/schemas/Login.schema";
import useTranslation from "../../hooks/translation/useTranslation";
import {loginWithCredentials} from "../../services/login/loginWithCredentials/loginWithCredentials";
import {FormInputsType} from "../../domain/types/login/FormInputs.type";
import {useDispatch} from "react-redux";
import actions from "../../store/actions";

const Login:FC<any> = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const onSubmit = async (values: FormikValues&FormInputsType) => {
        // loginWithCredentials(values).then()
        dispatch(actions.authenticateUser);
    }

    return (
        <Formik
            initialValues   = {{email:'',password:''}}
            onSubmit        = {onSubmit}
            validationSchema={LoginSchema(t)}
            // validate={(values:FormikValues)=>{
            //     console.log(values)
            //     return {};
            // }}
        >
            {RenderContainer}
        </Formik>

    );
}
const RenderContainer = (formProps: FormPropertiesType) => {
    return <LoginPresenter {...formProps}/>
};
export default Login