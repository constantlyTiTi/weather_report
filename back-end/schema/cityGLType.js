const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const cityGLType = new GraphQLObjectType({
    name: 'cityGLType',
    fields: () => ({
        _id:GraphQLString,
        name:{
            type:GraphQLString
        },
        address:{
            state: {
                type:GraphQLString
            },
            country:{
                type:GraphQLString
            }
        },
        location:{
            type:GraphQLList
        }
    })
});
module.exports = cityGLType