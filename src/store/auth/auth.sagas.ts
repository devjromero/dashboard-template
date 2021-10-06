import {takeEvery, put} from 'redux-saga/effects'

const delay = (ms:any) => new Promise(res => setTimeout(res, ms))

function* makeAuthentication(){
    yield delay(1000)
    yield put({ type: 'setAuthenticateInformation' })
}

export default function* authenticateUser(){
    yield takeEvery('authenticateUser',makeAuthentication)
}