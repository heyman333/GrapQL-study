import { GraphQLServer } from 'graphql-yoga'
// const { GraphQLServer } = require('graphql-yoga')

const server = new GraphQLServer({})

server.start(() => console.log("graphQL server Running!"))
