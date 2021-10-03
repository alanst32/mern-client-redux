import { all, call, put, takeLatest, takeLeading } from "redux-saga/effects";
import StudentModel, { StudentRequest } from '@models/studentModel';
import { formatDate } from '@utils/dateUtils';
import { get } from 'lodash';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { deleteStudentError, getStudentsError, getStudentsRequest, getStudentsSuccess, insertStudentError, STUDENT_ACTIONS, updateStudentError } from "@redux/actions/studentActions";



// AXIOS
const baseUrl = 'http://localhost:3000';
const headers = { 
    'Content-Type': 'application/json',
    mode: 'cors',
    credentials: 'include'
};

const axiosClient = axios;
axiosClient.defaults.baseURL = baseUrl;
axiosClient.defaults.headers = headers;

const getStudentsAsync = (body: StudentRequest) => {
    return axiosClient.post<StudentModel[]>(
        '/student/list', 
        body
    );
}

function* getStudentsSaga(action) {
    try {
        console.log('\n\n\n CALLING SAGE Async Request');
        console.log('%j', action);
        const args = get(action, 'args', {})
        const response = yield call(getStudentsAsync, args);

        console.log('Response');
        console.log('%j', response);

        yield put(getStudentsSuccess(response.data));
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(getStudentsError({error}));
    }
}

const insertStudentsAsync = async (body: StudentModel) => {
    return axiosClient.post(
        '/student',
        body
    )
}

function* insertStudentSaga(action) {
    try {
        const studentModel = get(action, 'args');
        if (studentModel == null) {
            throw new Error('Request is null');
        }
        yield call(insertStudentsAsync, studentModel);
       
        const getAction = {
            type: STUDENT_ACTIONS.GET_STUDENTS_REQUEST,
            args: {},
        };
        yield call(getStudentsSaga, getAction);
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(insertStudentError({error}));
    }
};

const updateStudentAsync = async (body: StudentModel) => {
    return axiosClient.put(
        '/student',
        body
    );
};

/**
 * 
 * @param action {type, payload: StudentModel}
 */
function* updateStudentSaga(action) {
    try {
        const studentModel = get(action, 'args');
        if (studentModel == null) {
            throw new Error('Request is null');
        };
        yield call(updateStudentAsync, studentModel);
       
        const getStudentRequestAction = getStudentsRequest({});
        yield call(getStudentsSaga, getStudentRequestAction);
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(updateStudentError({error}));
    }
};

const deleteStudentsAsync = async (ids: string[]) => {
    return axiosClient.post(
        '/student/inactive',
        {ids}
    );
};

/**
 * 
 * @param action {type, payload: string[]}
 */
 function* deleteStudentSaga(action) {
    try {
        const ids = get(action, 'args');
        if (isEmpty(ids)) {
            throw new Error('Request is null');
        };
        yield call(deleteStudentsAsync, ids);
       
        const getStudentRequestAction = getStudentsRequest({});
        yield call(getStudentsSaga, getStudentRequestAction);
    } catch(ex: any) {
        const error = {
            type: ex.message, // something else can be configured here
            message: ex.message,
        };
        yield put(deleteStudentError({error}));
    }
};

/*
export const getStudentsRequest = (args: StudentRequest): GetStudentsRequest  => ({
  type: STUDENT_ACTIONS.GET_STUDENTS_REQUEST,
  args,
}); 
*/

function* studentSaga() {
    yield all([
        takeLatest(STUDENT_ACTIONS.GET_STUDENTS_REQUEST, getStudentsSaga),
        takeLeading(STUDENT_ACTIONS.INSERT_STUDENT_REQUEST, insertStudentSaga),
        takeLeading(STUDENT_ACTIONS.UPDATE_STUDENT_REQUEST, updateStudentSaga),
        takeLeading(STUDENT_ACTIONS.DELETE_STUDENT_REQUEST, deleteStudentSaga),
    ]);
}

export default studentSaga;