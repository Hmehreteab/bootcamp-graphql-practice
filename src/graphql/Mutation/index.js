const merge = require('lodash.merge')

// would handle all Mutations related to Users (createUser, editUserInfo)

const resolvers = {
    mutation addAuthor($addAuthorInput: AddAuthorInput!) {
        addAuthor(input: $addAuthorInput) {
            id
            firstName
            lastName
        }
    }

    mutation editAuthorInfo($editAuthorInfo: EditAuthorInfo!) {
        editAuthorInfo(input: $editAuthorInfo) {
            id
            firstName
            lastName
            age
            email
            numBooksPublished
            address
        }    
    }
}



module.exports = merge(...resolvers)
