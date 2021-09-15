import collegeViewModel from "../view-model/college-view-model.js";

export default class collegeMapper {
    map(source) {
        return new collegeViewModel(source["name"], source["code"]);
    }
}