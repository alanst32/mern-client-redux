import React, { useEffect, useState } from "react";
import _ from 'lodash';
import StudentModel, { StudentRequest } from "@models/studentModel";
import StudentForm from "@app/studentForm";
import StudentTable from "@app/studentTable";
import { useDispatch } from "react-redux";
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { getStudentsRequest } from "@redux/actions/studentActions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        home: {
            width: '98%',
            justifyContent: 'center',
            textAlign: 'center',
            margin: 'auto'
        }
    }),
);

export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();


    const emptyStudentModel: StudentModel = {
        _id: '',
        firstName: '',
        lastName: '',
        country: '',
        dateOfBirth: '',
        skills: []
    };
    
    useEffect(() => {
        const args: StudentRequest = {
            name: '',
            skills: [],
        };
        dispatch(getStudentsRequest(args));
    }, []);

    return (
        <div className={classes.home}>
            <StudentForm></StudentForm>   
            <StudentTable></StudentTable>
        </div>
    );
}
