const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');
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
            resolve: function (city) {
                const cityObj = City.findById(city.city_id).exec()
                if (!cityObj) {
                    throw new Error('Error')
                }
                return cityObj.location
            }
        }
    })
})

// const mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: () => ({
//         addNewCity: {
//             type: cityGLType,
//             args: {
//                 name:{
//                     type:new GraphQLNonNull(GraphQLString)
//                 },
//                 address:{
//                     state: {
//                         type:new GraphQLNonNull(GraphQLString)
//                     },
//                     country:{
//                         type:new GraphQLNonNull(GraphQLString)
//                     }
//                 },
//                 location:{
//                     type:GraphQLList
//                 }
//             },
//             resolve: function (root, params) {
//                 if(location.length === 0){
//                     throw new Error('Error');
//                 }
//                 const city = new City(params);
//                 const newCity = city.save();
//                 if (!newCity) {
//                     throw new Error('Error');
//                 }
//                 return newCity
//             }
//         }
//     })

// })

module.exports = new GraphQLSchema({ query: query });