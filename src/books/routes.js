const { Router } = require("express");

const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getSingleBookByTitle,
} = require("./controllers");

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);

//http://localhost:5001/books/getbook/beans on toast
// {dave: beans on toast}

bookRouter.get("/books/getbook/:title", getSingleBookByTitle);
bookRouter.put("/books/updatebook", updateBook);
bookRouter.delete("/books/deletebook", deleteBook);

module.exports = bookRouter;
