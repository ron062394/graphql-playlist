const graphql = require('graphql');

const {GrapQLObjectType, GraphQLString, GraphQLSchema} = graphql;

//Dummy data
var books = [
  {name: 'Voice of the Wind', genre: 'Fantasy', id: '1' },
  {name: 'Eyes of the Earth', genre: 'Fantasy', id: '2' },
  {name: 'Ears of the Water', genre: 'Fantasy', id: '3' },
  {name: 'Breath of the fire', genre: 'Fantasy', id: '4' },   
  ]

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