import {  readFile, writeFile, existsSync } from "fs";
import * as path from 'path'


export const departmentController = {
    
    get: (req, res) => {
        let departments= departmentController.getDepartment();
        departments
        .then (data=>{
            res.json(data)
        })
              
    },
    getById: (req, res) => {
        let departments= departmentController.getDepartment();
        var department = departments.find(t => t.id == req.params.id);

        if (department)
            res.status(200).json(department);
        else
            res.status(404).send();
    },
    post: (req, res) => {
        if (!req.body.name) {
            res.status(400).send('Missing name or age value');
            return;
        }
        let filepath = path.join(path.resolve(), '/data/departments.json')
        
        if (existsSync(filepath)){
            console.log("file path is thare")  
        }
        else{
            
        }
        readFile (filepath,'utf8',(err,data)=>{
               
            var departments = data?JSON.parse(data):[];
          
            //console.log(data);
            var department =
            {
                id: departments.length + 1,
                name: req.body.name,
             };
             departments.push(department);
     
             
             writeFile(filepath , JSON.stringify(departments),(err)=>{
                if (err) {
                    return (err)
                }
                console.log("array Updated")
               });
        });
         
        res.status(201).send("department record created successfully");
    },
    delete: (req, res) => {
        res.send("hi");
        var index = departments.findIndex(t => t.id == req.params.id);
        departments.splice(index, 1);
        res.status(200).send(`department record (${req.params.id}) deleted successfully`);
    },
    getDepartment: ()=>{
        return new Promise((resolve, reject) => {
            let filepath = path.join(path.resolve(), '/data/departments.json')
    readFile(filepath,'utf8',(data,err) => {
        if(err){
            console.log(err);
        }
        console.log(data);
        resolve(JSON.stringify(data));
    })
    
    if(reject){
        console.log("err");
        reject
    }
})
}
};
  