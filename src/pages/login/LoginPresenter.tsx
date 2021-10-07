import LoginFormPresenter from "../../components/login/LoginForm.presenter";
import {Formik} from 'formik';
import {FormPropertiesType} from "../../domain/types/FormProperties.type";

export const LoginPresenter: React.FC<any> = props => {
    return (
        <Formik
            initialValues   = {{email:'',password:''}}
            onSubmit        = {(e)=>{}}
        >
            {RenderContainer}
        </Formik>
    );
};

const RenderContainer = (formProps: FormPropertiesType) => (<LoginFormPresenter {...formProps}/>);
