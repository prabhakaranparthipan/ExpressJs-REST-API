//import { students } from '../data/students.json';
import { assert } from 'console';
import { readFile, writeFile } from 'fs';
import * as path from 'path'
import { StudentEngine } from '../engine/student-engine.js';
import { studentDatabase } from '../repository/students-repository.js'

export const studentController = {
    get: async (req, res) => {
        let students = await new StudentEngine().getStudents();
        res.json(students);
    },
    getById:async (req, res) => {
        //console.log('test');
        // let student = new StudentEngine().getStudents();
        let student = await new StudentEngine().getStudentsByid(req.params.id);
        //console.log(student);
        res.json(student);
        // let students = studentController.getstudentFrom();
        // var student = students.find(t => t.id == req.params.id);

        // if (student)
        //     res.status(200).json(student);
        // else
        //     res.status(404).send();
    },
    post: (req, res) => {
        if (!req.body.name || !req.body.age) {
            res.status(400).send('Missing name or age value');
            return;
        }
        studentDatabase.storestudentdb(req.body.name, req.body.age);
        /*let filepath = path.join(path.resolve(), '/data/students.json')
        readFile(filepath, "utf8", (err, data) => {
            //console.log("hi")
            //console.log(data)
            var students = data? JSON.parse(data):[];
            var student =
            {
                id: students.length + 1,
                name: req.body.name,
                age: req.body.age
            };
            students.push(student);
            writeFile(filepath, JSON.stringify(students), (err) => {
                if (err) {
                    return (err)
                }
                console.log("array Updated")
            });
        });*/
        res.status(201).send("Student record created successfully");
    },
    put:async (req,res)=>{
        let isupdate = await new StudentEngine().putStudents(req.params.id);
    },
    delete: async (req, res) => {
        //new StudentEngine().getStudents();
        //  var index = students.find(t => t.id == req.params.id);
        // students.splice(index, 1);
        //deleteStudent()
       // console.log(req.params.id)
        let isSuccess = await new StudentEngine().deleteStudents(req.params.id);
        if (isSuccess)
            res.status(200).send(`Student record (${req.params.id}) deleted successfully`);
        else
            res.status(404).send('Student record does not exist');
    },
    /*getstudentFrom: ()=>{
        return new Promise((resolve, reject) => {
        let filePath = path.join(path.resolve() ,'/data/students.json')
          readFile (filePath,'utf8',(err,data)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(data);
            resolve(JSON.parse(data));
          });
          if(reject){
              console.log("error to read json");
              reject
          }
        });
    }*/
    getstudentFrom: () => {
        return new Promise((resolve, reject) => {
            let filePath = path.join(path.resolve(), '/repository/students-repository.js')
            readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log(data);
                resolve(JSON.parse(data));
            });
            if (reject) {
                console.log("error to read json");
                reject
            }
        });
    }
};