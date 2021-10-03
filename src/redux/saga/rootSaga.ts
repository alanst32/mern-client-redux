
import { all, fork } from "redux-saga/effects";
import studentSaga from "./studentSaga";

export function* rootSaga() {
    yield all([fork(studentSaga)]);
};