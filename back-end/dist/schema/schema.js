"use strict";

require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = require('graphql');
var City = require('../models/city');
const cityGLType = require('./cityGLType');
const query = new GraphQLObjectType({
  name: 'query',
  fields: () => ({
    getLocation: {
      type: cityGLType,
      args: {
        city_id: {
          name: "_id",
          type: GraphQLString
        }
      },
      resolve: function resolve(root, params) {
        const cityObj = City.findById(params.city_id).exec();
        if (!cityObj) {
          throw new Error('cannot find city');
        }
        return cityObj;
      }
    },
    getProvinces: {
      type: new GraphQLList(GraphQLString),
      args: null,
      resolve: async function resolve() {
        const cities = await City.distinct("address.state");
        if (!cities && cities.length === 0) {
          throw new Error('cannot find city');
        }
        return cities;
      }
    },
    getCitiesByProvince: {
      type: new GraphQLList(cityGLType),
      args: {
        state: {
          name: 'state',
          type: GraphQLString
        }
      },
      resolve: async function resolve(root, params) {
        const cities = await City.find({
          'address.state': params.state
        });
        if (!cities && cities.length === 0) {
          throw new Error('cannot find city');
        }
        return cities;
      }
    }
  })
});
module.exports = new GraphQLSchema({
  query: query
});