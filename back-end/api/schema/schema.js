const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');
var City = require('../models/city');

const cityGLType = require('./cityGLType')

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
            resolve: function (root, params) {

                const cityObj = City.findById(params.city_id).exec()

                if (!cityObj) {
                    throw new Error('cannot find city')
                }
                return cityObj
            }
        },

        getProvinces: {
            type: new GraphQLList(GraphQLString),
            args: null,
            resolve: async function () {
                const cities = await City.distinct("address.state")

                if (!cities && cities.length === 0) {
                    throw new Error('cannot find city')
                }
                return cities
            }
        },

        getCities: {
            type: new GraphQLList(cityGLType),
            args: null,
            resolve: async function () {
                const cities = await City.aggregate([
                    { $unwind: "$name" },
                    {
                        $group: {
                            originalId: { $first: '$_id' },
                            _id: "$name",
                            name: { $first: '$name' },
                            location: { $first: '$location' },
                            address: { $first: '$address' },
                            count: { $count: {} }
                        }
                    },
                    { $sort: { name: 1 } },
                    {
                        $project: {
                            name: "$name",
                            _id: "$originalId",
                            location: '$location',
                            address: '$address',
                        }
                    }
                ])
                console.log(cities.length)
                if (!cities && cities.length === 0) {
                    throw new Error('cannot find city')
                }
                return cities
            }
        }
    })
})

module.exports = new GraphQLSchema({ query: query });