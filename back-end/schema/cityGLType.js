const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const addressGLType = require('./addressGLType')

const cityGLType = new GraphQLObjectType({
    name: 'cityGLType',
    fields: () => ({
        _id:{type:GraphQLString},
        name:{
            type:GraphQLString
        },
        address:{
            type: addressGLType
        },
        location:{
            type:new GraphQLList(GraphQLString)
        }
    })
});
module.exports = cityGLType