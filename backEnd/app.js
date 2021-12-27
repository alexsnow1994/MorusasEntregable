
if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}

const express = require('express');
const morgan = require('express');
const multer = require('multer');
const path = require('path');




//mandar llamar
const app = express();
require('./database') 
//middelwares

app.use(morgan('combined'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const storage = multer.diskStorage({
    destination: path.join(__dirname ,'/public/uploads' ),
    filename(req , file, cb){
        cb(null ,new Date().getTime() + pathextname(file.originalname))
    }
});
app.use(multer({storage}).single('image'))//
//setings
app.set('port',process.env.PORT || 3000 )
app.set('json espaces',2) 
//rutas
app.use('/api/books',require('./routes/books'))

/// static file 
app.use(express.static(path.join(__dirname, 'public')))


//llamar

app.listen(app.get('port'),()=>{
    console.log(`lisent on port ${app.get('port')}`);
})