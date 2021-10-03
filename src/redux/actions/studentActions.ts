import StudentModel, { StudentRequest } from "@models/studentModel";

// TYPES
export enum STUDENT_ACTIONS {
    GET_STUDENTS_REQUEST = 'GET_STUDENTS_REQUEST',
    GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS',
    GET_STUDENTS_ERROR = 'GET_STUDENTS_ERROR',
    INSERT_STUDENT_REQUEST = 'INSERT_STUDENT_REQUEST',
    INSERT_STUDENT_SUCCESS = 'INSERT_STUDENT_SUCCESS',
    INSERT_STUDENT_ERROR = 'INSERT_STUDENT_ERROR',
    UPDATE_STUDENT_REQUEST = 'UPDATE_STUDENT_REQUEST',
    UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS',
    UPDATE_STUDENT_ERROR = 'UPDATE_STUDENT_ERROR',
    DELETE_STUDENT_REQUEST = 'DELETE_STUDENT_REQUEST',
    DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS',
    DELETE_STUDENT_ERROR = 'DELETE_STUDENT_ERROR',
    ADD_SKILLS_REQUEST = 'ADD_SKILLS_REQUEST',
    ADD_SKILLS_SUCCESS = 'ADD_SKILLS_SUCCESS',
    ADD_SKILLS_ERROR = 'ADD_SKILLS_ERROR',
};

interface LoadingState {
  isLoading: boolean,
}

interface CommonErrorPayload {
  error?: {
      message: string,
      type: string,
  },
}

// ACTION RETURN TYPES
export interface GetStudentsRequest {
  type: typeof STUDENT_ACTIONS.GET_STUDENTS_REQUEST;
  args: StudentRequest,
};

export interface GetStudentsSuccess {
  type: typeof STUDENT_ACTIONS.GET_STUDENTS_SUCCESS;
  payload: StudentModel[],
};

export interface GetStudentsError {
  type: typeof STUDENT_ACTIONS.GET_STUDENTS_ERROR;
  payload: CommonErrorPayload,
};

export interface InsertStudentRequest {
  type: typeof STUDENT_ACTIONS.INSERT_STUDENT_REQUEST;
  args: StudentModel,
}

export interface InsertStudentSuccess {
  type: typeof STUDENT_ACTIONS.INSERT_STUDENT_SUCCESS,
};

export interface InsertStudentError {
  type: typeof STUDENT_ACTIONS.INSERT_STUDENT_ERROR;
  payload: CommonErrorPayload,
};

export interface UpdateStudentRequest {
  type: typeof STUDENT_ACTIONS.UPDATE_STUDENT_REQUEST;
  args: StudentModel,
};

export interface UpdateStudentSuccess {
  type: typeof STUDENT_ACTIONS.UPDATE_STUDENT_SUCCESS,
};

export interface UpdateStudentError {
  type: typeof STUDENT_ACTIONS.UPDATE_STUDENT_ERROR;
  payload: CommonErrorPayload,
};

export interface DeleteStudentRequest {
  type: typeof STUDENT_ACTIONS.DELETE_STUDENT_REQUEST;
  args: string[],
};

export interface DeleteStudentSuccess {
  type: typeof STUDENT_ACTIONS.DELETE_STUDENT_SUCCESS,
};

export interface DeleteStudentError {
  type: typeof STUDENT_ACTIONS.DELETE_STUDENT_ERROR;
  payload: CommonErrorPayload,
};

// ACTIONS
export const getStudentsRequest = (args: StudentRequest): GetStudentsRequest  => ({
  type: STUDENT_ACTIONS.GET_STUDENTS_REQUEST,
  args,
}); 

export const getStudentsSuccess = (payload: StudentModel[]): GetStudentsSuccess => ({
  type: STUDENT_ACTIONS.GET_STUDENTS_SUCCESS,
  payload,
});

export const getStudentsError = (payload: CommonErrorPayload): GetStudentsError => ({
  type: STUDENT_ACTIONS.GET_STUDENTS_ERROR,
  payload,
});

export const insertStudentRequest = (args: StudentModel): InsertStudentRequest => ({
  type: STUDENT_ACTIONS.INSERT_STUDENT_REQUEST,
  args,
});

export const insertStudentSuccess = (): InsertStudentSuccess => ({
  type: STUDENT_ACTIONS.INSERT_STUDENT_SUCCESS,
});

export const insertStudentError = (payload: CommonErrorPayload): InsertStudentError => ({
  type: STUDENT_ACTIONS.INSERT_STUDENT_ERROR,
  payload,
});

export const updateStudentRequest = (args: StudentModel): UpdateStudentRequest => ({
  type: STUDENT_ACTIONS.UPDATE_STUDENT_REQUEST,
  args,
});

export const updateStudentSuccess = (): UpdateStudentSuccess => ({
  type: STUDENT_ACTIONS.UPDATE_STUDENT_SUCCESS,
});

export const updateStudentError = (payload: CommonErrorPayload): UpdateStudentError => ({
  type: STUDENT_ACTIONS.UPDATE_STUDENT_ERROR,
  payload,
});

export const deleteStudentRequest = (args: string[]): DeleteStudentRequest => ({
  type: STUDENT_ACTIONS.DELETE_STUDENT_REQUEST,
  args,
});

export const deleteStudentSuccess = (): DeleteStudentSuccess => ({
  type: STUDENT_ACTIONS.DELETE_STUDENT_SUCCESS,
});

export const deleteStudentError = (payload: CommonErrorPayload): DeleteStudentError => ({
  type: STUDENT_ACTIONS.DELETE_STUDENT_ERROR,
  payload,
});