
import mongoose from 'mongoose'
const { Schema } = mongoose;

const collegeSchema = new Schema({
  name: String,
  code:String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const college = mongoose.model('college', collegeSchema);

export const collegeDatabase = {

  storecollegedb: (a,b) => {
   
    mongoose.connect('mongodb://localhost:27017/test')
      .then(() => {
        
        const poomani = new college({ name:a ,code:b})
        poomani.save((err, fluffy) => {
          if (err)
            return console.log(err)
          else
            console.log('Successfully saved');
        });
      })
    
  },
 getdb:async ()=>{
    await mongoose.connect('mongodb://localhost:27017/test');
    return await college.find({});
  },

}