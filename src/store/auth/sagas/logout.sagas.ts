import {takeEvery, put} from 'redux-saga/effects'
import authActions from "../auth.actions";


function* callback(action: any){
    yield put(authActions.logoutUser)
}

export default function* handleLogoutUser(){
    yield takeEvery(authActions.logout.type,callback)
}

