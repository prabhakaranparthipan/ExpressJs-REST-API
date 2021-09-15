import { writeFile, readFile } from 'fs';
import * as path from 'path';
import {collegeDatabase} from '../repository/college-repository.js';
import { collegeEngine } from '../engine/college-engine.js';

export const collegeController = {
    //display all colleges+++++
    get:async (req, res) => {
        let colleges = await new collegeEngine().getcolleges();
        res.json(colleges);
        //colleges.then(data=>{
        //res.json(data);
        //});
    },
    // display college by id value
    getId: (req, res) => {
        let colleges = collegeController.readFromFile();
        var college = colleges.find(c => c.id == req.params.id);
        if (college)
            res.status(200).json(college);
        else
            res.status(404).send();
    },
    // add value to array from body
    post: (req, res) => {
        if (!req.body.name || !req.body.code) {
            res.send("invalid name or code");
            return;
        }
        collegeDatabase.storecollegedb(req.body.name, req.body.code);

    //     let filePath = path.join(path.resolve(), '/data/colleges.json');
    //     readFile(filePath, "utf8", (err, data) => {
    //         var colleges = data?JSON.parse(data):[];
    //         var college = {
    //             id: colleges.length + 1,
    //             name: req.body.name,
    //             code: req.body.code

    //         };
    //         colleges.push(college);
    //         writeFile(filePath, JSON.stringify(colleges), (err, result) => {
    //                 if (err) {
    //                     console.log(err)
    //                     return(err)
    //                 }
    //                 console.log("json added")
    //             }
    //         )
  // });


        res.status(201).send("college record created successfully");
    },
    delete: (req, res) => {

        var index = colleges.findIndex(c => c.id == req.params.id);
        collegeDatabase.deletedb(index);
        //colleges.splice(index, 1);
        // res.status(200).send(`department record (${req.params.id}) deleted successfully`);
        res.status(200).send(`The id (${req.params.id}) removed`);
    },
    // readFromFile: () => {
    //     return new Promise((resolve, reject) => {
    //         let filePath = path.join(path.resolve(), '/data/colleges.json');
    //         readFile(filePath, "utf8", (err, data) => {
    //             resolve(JSON.parse(data));
    //         });
    //     });
    // }
    getCollegeFrom: () => {
        return new Promise((resolve, reject) => {
            let filePath = path.join(path.resolve(), '/repository/college-repository.js')
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
