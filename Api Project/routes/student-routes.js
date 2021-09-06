import express from 'express';
import { studentController } from '../controller/student-controller.js'
export var studentRouter = express.Router();

studentRouter.get('/', (req, res) => studentController.get(req, res));
studentRouter.post('/', (req, res) => studentController.post(req, res));
studentRouter.get('/:id', (req, res) => studentController.getById(req, res));
studentRouter.delete('/:id', (req, res) => studentController.delete(req, res));