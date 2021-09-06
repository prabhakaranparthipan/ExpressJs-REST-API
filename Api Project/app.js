import express from 'express';
import{departmentRouter } from'./routes/department-routes.js';
import { studentRouter } from './routes/student-routes.js';
import { collegeRouter } from './routes/college-routers.js';
export let app = express();

app.use(express.json());

app.use('/students', studentRouter);
app.use('/departments', departmentRouter);
app.use('/colleges', collegeRouter);
