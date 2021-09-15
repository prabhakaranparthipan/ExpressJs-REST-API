import StudentMapper from '../mappers/student-mapper.js';
import { studentDatabase } from '../repository/students-repository.js';

export class StudentEngine {
    async getStudents() {
        let model = await studentDatabase.getdb();
        
        //     let mapper= new StudentMapper();
        //    let student= mapper.map(model[0]);
        //    return student;
        return new StudentMapper().map(model);
    }
      async deleteStudents (id){
       return await studentDatabase.deletedb(id);
         //console.log(model);
}
async getStudentsByid (id) {
    let model = await studentDatabase.iddisplaydb(id);
    
    //     let mapper= new StudentMapper();
    //    let student= mapper.map(model[0]);
    //    return student;
    return new StudentMapper().map(model);
}
putStudents(data){
let studentData = studentDatabase.storestudentIDdb(data);
}
}