import { STUDENT_ACTIONS } from "redux/actions/studentActions";

const initialState = {
    isGetStudentsLoading: false,
    data: [],
    getStudentsError: null,
    isInsertStudentLoading: false,
    insertStudentError: null,
    isUdpateStudentLoading: false,
    updateStudentError: null,
    isDeleteStudentLoading: false,
    deleteStudentError: null,
};

export default (state = initialState, action) => {
    console.log(`Got here in the Student Action: ${JSON.stringify(action)}`);
    switch(action.type) {
        case STUDENT_ACTIONS.GET_STUDENTS_REQUEST:
            return {
                ...state,
                isGetStudentsLoading: true,
                getStudentsError: null,
            };
        case STUDENT_ACTIONS.GET_STUDENTS_SUCCESS:
            return {
                ...state,
                isGetStudentsLoading: false,
                data: action.payload,
                getStudentsError: null,
            }; 
        case STUDENT_ACTIONS.GET_STUDENTS_ERROR:
            return {
                ...state,
                isGetStudentsLoading: false,
                data: [],
                getStudentsError: action.payload.error,
            };
        // INSERT
        case STUDENT_ACTIONS.INSERT_STUDENT_REQUEST:
            return {
                ...state,
                isInsertStudentLoading: true,
                insertStudentError: null,
            };
        case STUDENT_ACTIONS.INSERT_STUDENT_ERROR:
            return {
                ...state,
                isInsertStudentLoading: false,
                insertStudentError: action.payload.error,
            };
        // UPDATE
        case STUDENT_ACTIONS.UPDATE_STUDENT_REQUEST:
            return {
                ...state,
                isUdpateStudentLoading: true,
                updateStudentError: null,
            };
        case STUDENT_ACTIONS.UPDATE_STUDENT_ERROR:
            return {
                ...state,
                isUdpateStudentLoading: false,
                updateStudentError: action.payload.error,
            };
        // DELETE
        case STUDENT_ACTIONS.DELETE_STUDENT_REQUEST:
            return {
                ...state,
                isDeleteStudentLoading: true,
                deleteStudentError: null,
            }; 
        case STUDENT_ACTIONS.DELETE_STUDENT_ERROR:
            return {
                ...state,
                isDeleteStudentLoading: false,
                deleteStudentError: action.payload.error,
            };
        default: 
            return {
                ...initialState,
            }
    }
}