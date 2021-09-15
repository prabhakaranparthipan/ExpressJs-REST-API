
import mongoose from 'mongoose'
const { Schema } = mongoose;

const StudentSchema = new Schema({
  id: Number,
  name: String,
  age: String, // String is shorthand for {type: String}
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

const Student = mongoose.model('Student', StudentSchema);

export const studentDatabase = {

  storestudentdb: (a, b) => {

    mongoose.connect('mongodb://localhost:27017/test')
      .then(async () => {
        const poomani = new Student({ id: await Student.count() + 1, name: a, age: b })
        poomani.save((err, fluffy) => {
          if (err)
            return console.log(err)
          else
            console.log('Successfully saved');
        });
      })

  },
  getdb: async () => {
    await mongoose.connect('mongodb://localhost:27017/test');
    var x = await Student.find({});
    //console.log(x);
    return x
  },
  deletedb: async (index) => {
    mongoose.connect('mongodb://localhost:27017/test');
    let item = await Student.find({ id: index });
    console.log(item)
    if (item.length == 0)
      return false;
    else
      item[0].remove();
    return true;
  },
  iddisplaydb: (index) => {
    mongoose.connect('mongodb://localhost:27017/test');
    let item = Student.find({ id: index });
    // console.log(item);
    return item;
  },
  storestudentIDdb:(data)=>{
    mongoose.connect('mongodb://localhost:27017/test')
    let item = Student.find({ id: index });
    return item;
  }
}