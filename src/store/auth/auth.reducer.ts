import Action from "../../domain/types/ActionReducer.type";
import actions from "./auth.actions";

export type State = {
    isAuthenticated: boolean,
    nickname: string,
    uid: string|null,
}
const initialState: State = {
    isAuthenticated: false,
    nickname:'Guest',
    uid: null
}
const authReducer = (state: State = initialState, action: Action) => {
    switch (action.type){
        case actions.authenticateUser.type:
            return {
                ...state,
                isAuthenticated: true,
            };
        case actions.logoutUser.type:
            return initialState;
        default: return state;
    }
}

export default authReducer;