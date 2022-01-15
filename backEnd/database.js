const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI , {
    useNewUrlParser: true
})

// .then(db  => console.log('db is connect'));
//  .catch(err => console.error(err) )
 
 console.log(process.env.MONGODB_URI)

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://morusas:morusas@cluster0.kw5np.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
