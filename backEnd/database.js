const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI , {
    useNewUrlParser: true
})

// .then(db  => console.log('db is connect'));
//  .catch(err => console.error(err) )
 
 console.log(process.env.MONGODB_URI)