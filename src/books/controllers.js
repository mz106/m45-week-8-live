const Book = require("./model");

const addBook = async (req, res) => {
  try {
    // const book = await Book.create({
    //   title: req.body.title,
    //   author: req.body.author,
    //   genre: req.body.genre,
    // });

    const book = await Book.create(req.body);

    console.log(book);

    // const successResponse = {
    //   message: "success",
    //   newBook: book,
    // };

    // res.status(201).json(successResponse);

    res.status(201).json({ message: "success", newBook: book });
  } catch (error) {
    console.log(error);
    // const errorResponse = {
    //   errorMessage: error.message,
    //   error: error,
    // };

    // res.status(501).json(errorResponse);

    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.findAll();

    res.status(200).json({ message: "success", books: allBooks });
  } catch (error) {
    console.log(error);
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.update(
      { [req.body.updateKey]: req.body.updateValue },
      { where: { title: req.body.title } }
    );

    res.status(204).json({ message: "success", updatedBook });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const result = await Book.destroy({ where: { title: req.body.title } });

    res.status(201).json({ message: "success", result: result });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

const getSingleBookByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { title: req.params.title } });
    res.status(200).json({ message: "success", book: book });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

// await User.destroy({
//   where: {
//     firstName: "Jane",
//   },
// });

module.exports = {
  addBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getSingleBookByTitle,
};

//mongoose

//update the book "matilda" genre from childrens to kids
// const updatedBook = await Book.updateOne(
//   { title: "matilda" }, //filter
//   { genre: "kids" } //new data to update to
// );

// {
//   "title": "matilda",
//   "author": "roald dahl",
//   "genre": "childrens"
// }

// //sequelize
// const updateBook = await Book.update(
//   { genre: "kids" }, // new data to update to
//   { where: { title: "matilda" } } // filter
// );

// state bookTitle

// const response = await fetch(`http://localhost:5001/books/getbook/${bookTitle}`)
