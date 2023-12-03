const graphql = require('graphql');

const {GrapqlObjectType, GraphQLString} = graphql;

const BookType = new GrapqlObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    })
})
