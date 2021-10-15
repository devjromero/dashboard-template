import {takeEvery, put} from 'redux-saga/effects'
import authActions from "../auth.actions";

const delay = (ms:any) => new Promise(res => setTimeout(res, ms))

function* tryMakeAuthentication(action: any){
    yield delay(1000)
    console.log(action);
    yield put(authActions.authenticateUser)
}

export default function* tryAuthenticateUser(){
    yield takeEvery(authActions.tryAuthenticateUser.type,tryMakeAuthentication)
}

