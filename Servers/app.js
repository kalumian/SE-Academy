// Genral
const { Router } = require('express'),
            mongoose = require('mongoose'),
            router = require("./Routes/index"),
            express = require('express'),
            bodyParser = require('body-parser'),
           app    = express(),
           { join } = require('path'),
            cors = require('cors');
            require('dotenv').config()

            
//-----------------------------------------------------


const port = process.env.PORT  || 3000
//Connect With Data Bases
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI , {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//------------------------------------------------------------------
//--------------------------------

app.use(cors());
app.listen(port, ()=>console.log('Server Start on Port :  ' + port))
app.use(express.json()); 
app.use(express.urlencoded({ extended:true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/',router)
//-------------------------------

