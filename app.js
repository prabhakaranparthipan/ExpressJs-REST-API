import express from 'express';
import {departmentRouter } from'./routes/department-routes.js';
import { studentRouter } from './routes/student-routes.js';
import { collegeRouter } from './routes/college-routers.js';
//import{ database } from './repository/students-repository.js'
import{ studentDatabase } from './repository/students-repository.js'

export let app = express();

studentDatabase.getdb();
//console.log("test")
app.use(express.json());
app.use('/students', studentRouter);
app.use('/departments', departmentRouter);
app.use('/colleges', collegeRouter);
