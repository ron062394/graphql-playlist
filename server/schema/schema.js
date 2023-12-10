const graphql = require('graphql');

const {GrapQLObjectType, GraphQLString, GraphQLSchema} = graphql;

const BookType = new GrapQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    })
})


const RootQuery = new GrapQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType, 
      args: {id: {type: GraphQLString}}, 
      resolve(parent, args) {
        args.id
      }
    }
  }
})


module.exports = new GraphQLSchema({
  RootQuery
})