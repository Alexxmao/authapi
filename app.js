const express = require('express');
const router = require('./routes/auth');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true,
      useUnifiedTopology: true },
    ()=> console.log('connected to DB')
);

//Middlewares
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute)

//Server Start
app.listen(3000, () => console.log('Sever Running'));