import express from 'express';
import { departmentController } from '../controller/department-controller.js'
export var departmentRouter = express.Router();

departmentRouter.get('/', (req, res) => departmentController.get(req, res));
departmentRouter.post('/', (req, res) => departmentController.post(req, res));
departmentRouter.get('/:id', (req, res) => departmentController.getById(req, res));
departmentRouter.delete('/:id', (req, res) => departmentController.delete(req, res));