"use strict";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');
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
module.exports = addressGLType;