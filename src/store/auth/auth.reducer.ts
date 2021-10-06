import Action from "../../domain/types/ActionReducer.type";

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
        default: return state;
    }
}

export default authReducer;