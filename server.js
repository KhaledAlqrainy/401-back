'use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/crypto', { useNewUrlParser: true, useUnifiedTopology: true });
const PORT = process.env.PORT || 8000


//////////////// modules //////////

const getCrypto = require('./control')
const {creatFav, getFav, deleteFav, updateFav } = require('./cruds')

////////// main root /////////////
app.get('/', (req,res)=> {
    res.send('Hello from main root')
})

///////// cruds //////////

app.get('/crypto', getCrypto)

app.post('/crypto/fav', creatFav)
app.get('/crypto/fav', getFav)
app.delete('/crypto/fav/:c_id', deleteFav)
app.put('/crypto/fav/:c_id', updateFav)












app.listen(PORT,()=> {
    console.log(`Im listening to ${PORT}`);
})