import OnChangeInputFunctionType from "./OnChangeInputFunction.type";

export type InputPropsType = {
    placeholder?:   string,
    isAnError?: boolean,
    onChange:   OnChangeInputFunctionType,
    value:  string,
    name:   string,
}