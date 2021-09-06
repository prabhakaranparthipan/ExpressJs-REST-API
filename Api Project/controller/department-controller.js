var departments = [];

export const departmentController = {
    get: (req, res) => {
        res.json(departments);
    },
    getById: (req, res) => {

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

        var department =
        {
            id: departments.length + 1,
            name: req.body.name

        };

        departments.push(department);
        res.status(201).send("department record created successfully");
    },
    delete: (req, res) => {
        res.send("hi");
        var index = departments.findIndex(t => t.id == req.params.id);
        departments.splice(index, 1);
        res.status(200).send(`department record (${req.params.id}) deleted successfully`);
    }
};