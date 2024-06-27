const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');
var City = require('../models/city');

const cityGLType = require('./cityGLType')

const query = new GraphQLObjectType({
    name: 'query',
    fields: () => ({

        getLocation: {
            type:  cityGLType,
            args: {
                city_id: {
                    name: "_id",
                    type: GraphQLString
                }
            },
            resolve:  function (root, params) {

                const cityObj =  City.findById(params.city_id).exec()
                
                if (!cityObj) {
                    throw new Error('cannot find city')
                }
                return cityObj
            }
        },

        getProvinces: {
            type: new GraphQLList(GraphQLString),
            args:null,
            resolve: async function() {
                const cities = await City.distinct("address.state")
    
                if(!cities && cities.length === 0){
                    throw new Error ('cannot find city')
                }
                return cities
            }
        },

        getCitiesByProvince : {
            type: new GraphQLList(cityGLType),
            args:{
                state : {
                    name: 'state',
                    type: GraphQLString
                }
            },
            resolve: async function(root, params){
                // const cities = await City.distinct("name",{'address.state':params.state})

                const cities = await City.aggregate([{
                    $match : { 
                        "address.state" : params.state,
                     }},
                     {
                    $group: {
                        originalId: {$first: '$_id'}, 
                        _id: '$name',
                        name: {$first: '$name'},
                      }
                    },
                    { $unwind:  "$name"},

                    { $project: {
                        name:"$name" ,
                        _id: "$originalId",
                    } 
                    }
                ])

                if(!cities && cities.length === 0){
                    throw new Error ('cannot find city')
                }

                return cities
            }
        },
        getCities : {
            type: new GraphQLList(cityGLType),
            args:null,
            resolve: async function() {
                const cities = await City.aggregate([
                    { $unwind:  "$name"},
                    {
                        $group: {
                            originalId: {$first: '$_id'}, 
                            _id: '$name',
                            name: {$first: '$name'},
                          }
                        },
    
                        { $project: {
                            name:"$name" ,
                            _id: "$originalId",
                        } 
                        }
                ])
    
                if(!cities && cities.length === 0){
                    throw new Error ('cannot find city')
                }
                return cities
            }
        }
    })
})

module.exports = new GraphQLSchema({ query: query });