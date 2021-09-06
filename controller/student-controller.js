//import { students } from '../data/students.json';
var students = [];

export const studentController = {
    get: (req, res) => {
        res.json(students);
    },
    getById: (req, res) => {
        //console.log('test');
        var student = students.find(t => t.id == req.params.id);

        if (student)
            res.status(200).json(student);
        else
            res.status(404).send();
    },
    post: (req, res) => {
        if (!req.body.name || !req.body.age) {
            res.status(400).send('Missing name or age value');
            return;
        }

        var student =
        {
            id: students.length + 1,
            name: req.body.name,
            age: req.body.age
        };

        students.push(student);
        res.status(201).send("Student record created successfully");
    },
    delete: (req, res) => {
        var index = students.findIndex(t => t.id == req.params.id);
        students.splice(index, 1);
        res.status(200).send(`Student record (${req.params.id}) deleted successfully`);
    }
};