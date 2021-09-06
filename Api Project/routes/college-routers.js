import express from 'express';
import{ collegeController} from '../controller/college-controller.js'
export var collegeRouter = express.Router();

collegeRouter.get('/',(req, res) => collegeController.get(req, res));
collegeRouter.post('/',(req, res) => collegeController.post(req, res));
collegeRouter.get('/:id',(req, res) => collegeController.getId(req, res));
collegeRouter.delete('/:id',(req, res) => collegeController.delete(req, res));