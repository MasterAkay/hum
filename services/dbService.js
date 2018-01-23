var MongoClient = require('mongodb').MongoClient;

module.exports = {
  createConnection: function() {

    MongoClient.connect("mongodb://akay:akay@ds161042.mlab.com:61042/projectormyapp").then(client=> {
            console.log('Connection established');
            module.exports.database=client.db('step-projector-app');
    }).catch(err=>{
      console.error('Unable to connect to the mongoDB server. Error:', err);

    })
  },
}
