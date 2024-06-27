const { GraphQLObjectType, GraphQLString } = require('graphql');
const addressGLType = new GraphQLObjectType({
    name: 'addressGLType',
    fields: () => ({
        state: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        }
    })
});

module.exports = addressGLType