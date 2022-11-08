import  express  from "express";
import Book from "../models/book.js";
// import validateBook from "../models/book.js";
import validateBook from "../models/function.js";
const router=express.Router()


// POST: to create the book

router.post('/book',(req,res)=>{
  validateBook()
    
    const book=new Book({
        name:req.body.bookname,
        author:{
            name:req.body.authorname,
            age:req.body.authorage
        },
        genre:req.body.genre

    });
    book.save().then(book=>{
        res.send(book);
    }).catch(error=>{
        res.status(500).send("book was not stored in db");
    })
})

router.get('/get',(req,res)=>{
    res.send("hello")
});

export default router




// npm start
// "scripts": {
//     "test": "echo \"Error:no test specified\" && exit 1",
//     "start": "node app.js"
//   },




// npm run dev

// "scripts": {
//     "dev": "nodemon -- exec babel-node"
//   },