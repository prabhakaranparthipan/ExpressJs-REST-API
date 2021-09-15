import StudentViewModel from "../view-model/student-view-model.js";

export default class StudentMapper {
    map(source) {
        var destination = [];
        for(var i=0;i<source.length;i++){
            destination.push(new StudentViewModel(source[i]["id"],source[i]["name"], source[i]["age"]));
        }
        return destination;
    }
}