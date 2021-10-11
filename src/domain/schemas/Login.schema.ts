import * as Yup from 'yup';
import TranslateFunction from "../types/TranslateFunction";
import Schema from "../types/Schema";

const LoginSchema: Schema = (t: TranslateFunction) => {
    return Yup.object().shape({
        email:      Yup.string()
            .email(t('must.be.email'))
            .required(t('required')),
        password:   Yup.string()
            .required(t('required')),
    })
}
export default LoginSchema;