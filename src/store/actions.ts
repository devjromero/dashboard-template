import ActionReducerType from "../domain/types/ActionReducer.type";
import authActions from "./auth/auth.actions";

const actions: ActionReducerType[] = [
    ...authActions
];

export default actions;