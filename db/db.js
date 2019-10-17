var config = require('config');


console.log("configGGGGGG", config)
var dbURI = config.get('database.uri')
console.log("dbURI", dbURI)
var dbReplicaSet = config.get('database.replicaSet')
var dbPoolSize = config.get('database.poolSize')


module.exports = {
  'url' : dbURI,
  'replicaSet' : dbReplicaSet,
  'dbPoolSize' : dbPoolSize
}