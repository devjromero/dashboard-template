import { all } from 'redux-saga/effects'
import authenticateUser from "./auth/auth.sagas";
export default function* rootSaga(){
    yield all([
        authenticateUser()
    ]);
}