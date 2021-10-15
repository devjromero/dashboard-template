import { all } from 'redux-saga/effects'
import tryAuthenticateUser from "./login.sagas";
import handleLogoutUser from "./logout.sagas";
export default function* authSagas(){
    yield all([
        tryAuthenticateUser(),
        handleLogoutUser()
    ]);
}