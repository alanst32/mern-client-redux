import { get } from 'lodash';
import { createSelector } from 'reselect';
import { AppState } from '@redux/reducer/rootReducer';

const entity = 'entities.student';

const getStudentsLoadingState = (state: AppState) => get(state, `${entity}.isGetStudentsLoading`, false);
const getStudentsState = (state:  AppState) => get(state, `${entity}.data`, []);
const getStudentsErrorState = (state: AppState) => get(state, `${entity}.getStudentsError`);
export const isGetStudentsLoading = createSelector(getStudentsLoadingState, (isLoading) => isLoading);
export const getStudents = createSelector(getStudentsState, (students) => students);
export const getStudentsError = createSelector(getStudentsErrorState, (error) => error);

const insertStudentLoadingState = (state: AppState) => get(state, `${entity}.isInsertStudentLoading`, false);
const insertStudentErrorState = (state: AppState) => get(state, `${entity}.insertStudentError`);
export const isInsertStudentLoading = createSelector(insertStudentLoadingState, (isLoading) => isLoading);
export const insertStudentError = createSelector(insertStudentErrorState, (error) => error);

const updateStudentLoadingState = (state: AppState) => get(state, `${entity}.isUdpateStudentLoading`, false);
const updateStudentErrorState = (state: AppState) => get(state, `${entity}.updateStudentError`);
export const isUpdateStudentLoading = createSelector(updateStudentLoadingState, (isLoading) => isLoading);
export const updateStudentError = createSelector(updateStudentErrorState, (error) => error);

const deleteStudentLoadingState = (state: AppState) => get(state, `${entity}.isDeleteStudentLoading`, false);
const deleteStudentErrorState = (state: AppState) => get(state, `${entity}.deleteStudentError`);
export const isDeleteStudentLoading = createSelector(deleteStudentLoadingState, (isLoading) => isLoading);
export const deleteStudentError = createSelector(deleteStudentErrorState, (error) => error);

const isAddSkillsLoadingState = (state: AppState) => get(state, `${entity}.isAddSkillsLoading`, false);
const addSkillErrorState = (state: AppState) => get(state, `${entity}.addSkillsError`);
export const isAddSkillsLoading = createSelector(isAddSkillsLoadingState, (isLoading) => isLoading);
export const addSkillsError = createSelector(addSkillErrorState, (error) => error);
