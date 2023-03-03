const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);

    // const author = {authorName: req.body.authorName}
    // const newAuthor = await Author.create(author)

    // const author = await Author.create({ authorName: req.body.authorName });

    res.status(201).json({ message: "success", author: author });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

const getAuthorAndBooks = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: { authorName: req.params.author },
      include: Book,
    });

    res.status(200).json({ message: "success", author: author });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

module.exports = {
  addAuthor,
  getAuthorAndBooks,
};
