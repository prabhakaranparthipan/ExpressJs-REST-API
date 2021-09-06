var colleges = [];

export const collegeController = {
    //display all colleges
    get: (req, res) => {
        res.json(colleges);
    },
    // display college by id value
    getId:(req,res)=>{
        var college = colleges.find(c=>c.id==req.params.id);
        if (college)
            res.status(200).json(college);
        else
            res.status(404).send();
    },
    // add value to array from body
    post: (req,res)=>{
        if(!req.body.name || !req.body.code){
            res.send("invalid name or code");
            return;
        }
        var college ={
            id: colleges.length+1,
            name: req.body.name,
            code: req.body.code
        };
        colleges.push(college);
        res.status(201).send("college record created successfully");
    },
    delete: (req, res) => {
     
        var index= colleges.findIndex(c => c.id== req.params.id);
        colleges.splice(index, 1);
       // res.status(200).send(`department record (${req.params.id}) deleted successfully`);
        res.status(200).send(`The id (${req.params.id}) removed`);
    }
};