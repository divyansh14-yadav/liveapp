import yup from 'yup';
const validateBook = book =>{

    const Schema = yup.object().shape({
        bookname:yup.string().required().min(3).max(50),
        authorname:yup.string().required().min(3).max(40),
        authorage:yup.number().required().min(10).max(100),
        genre:yup.string().required().min(3).max(20),
    });
    return Schema
    .validate(book)
    .then((book) => book)
    .catch((error) => console.log(error));
}

export default validateBook