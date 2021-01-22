const Book = require.apply('../../models/Book')

const allBooks = async () => {
    const b = Book.query()
    return b
}

const publisher = async ({}, params, context) => {

}
const resolver = {
    Query: {
        allBooks,
    }
    Book: {
        publisher,
    },
}

module.exports = resolver