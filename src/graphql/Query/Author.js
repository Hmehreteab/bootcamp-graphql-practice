const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Address = require('../../models/Address')

const allAuthors = async () => {
    try {
        const authors = await Author.query()
        return authors
    } catch (err) {
        console.log(err)
        throw new Error('failed to get authors') // alternative to return
    }
}

const author = async (obj, {authorId}, context) => {
    const a = await Author.query().findOne('id', addressId)
    return a
}
const books = async ({ id }, params, context) => {
    const b = await Book.query().where('authorId', id)
    return b
}

const address = async ({ adressid }, params, context) => {
    const a = await Address.query().findOne('id', addressId)
    return a
}

// const publisher 

const resolver = {
    Query: {
        // shorthand for allAuthors: allAuthors
        // left with typedef and right with resolver function
        allAuthors,
    },
    Author: {
        books,
        address,
        author,
    }
    Book: {
        publisher,
    }
}

module.exports = resolver