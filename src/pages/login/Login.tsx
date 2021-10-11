import {FC} from "react";
import {LoginPresenter} from "./LoginPresenter";
import {Formik, FormikValues} from "formik";
import {FormPropertiesType} from "../../domain/types/FormProperties.type";
import LoginSchema from "../../domain/schemas/Login.schema";
import useTranslation from "../../hooks/translation/useTranslation";

const Login:FC<any> = () => {
    const {t} = useTranslation();
    const onSubmit = async (e:FormikValues) => {
        // console.log(e);
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('fin')
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
    console.log(formProps)
return <LoginPresenter {...formProps}/>
};
export default Login