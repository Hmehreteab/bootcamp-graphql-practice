const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const Author = require('./Author')

// The former would contain resolvers for all 
// Queries related to Users (getUserById, getAllUsers),

const resolvers = {
    query getAuthorById($id: ID!) {
        Author(id: $id) {
            id
            firstName
            lastName
        }
    }

    query getAllAuthors {
        Author {
            id
            firstName
            lastName
            email
        }    
    }
}

module.exports = merge(...resolvers)
