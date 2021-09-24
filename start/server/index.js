const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql `

type Book {
    title: String
    author: String
    }

type MainCard {
    title: String
    image: String
    }    

type Query {
    books: [Book]
    mainCards: [MainCard]
    }

`;

const books = [
    {
        title: 'The Innocent Wife',
        author: 'David Balladaci'
    },
    {
        title: 'The Fountainhead',
        author: 'Ayn Rand'
    },
    {
        title: 'Atlas Shrugged',
        author: 'Ayn Rand'
    },
]
const mainCards = [
    {
        title: 'Recently Viewed',
        image: 'lion'
    },
    {
        title: 'Looking for a Gift?',
        image: 'penguin'
    },
    {
        title: 'Best Behaved',
        image: 'Cat'
    },
]

const resolvers = {
    Query: {
        books: () => books,
        mainCards: () => mainCards
    },
};


const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server started at ${url}`)
});