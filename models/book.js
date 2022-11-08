import mongoose from "mongoose";
import Author from "../models/author.js"

// book schema

const bookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    //   author:Author,
    genre:{
        
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    }
 


})
//  const validateBook = book =>{

//     const Schema = yup.object().shape({
//         bookname:yup.string().required().min(3).max(50),
//         authorname:yup.string().required().min(3).max(40),
//         authorage:yup.number().required().min(10).max(100),
//         genre:yup.string().required().min(3).max(20),
//     });
//     return Schema
//     .validate(book)
//     .then((book) => book)
//     .catch((error) => console.log(error));
// }

const Book=mongoose.model('Book',bookSchema)
export default Book