import collegeMapper from '../mappers/college-mapper.js';
import { collegeDatabase } from '../repository/college-repository.js';

export class collegeEngine {
    async getcolleges() {
        let model = await collegeDatabase.getdb();

        //     let mapper= new collegeMapper();
        //    let college= mapper.map(model[0]);
        //    return college;
        return new collegeMapper().map(model[0]);
    }
}
