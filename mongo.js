'use strict'

const mongoose = require('mongoose')

const cryptoSchema = new mongoose.Schema({
    title: String,
    description:String,
    toUSD:Number,
    image_url:String

  });

  const cryptoMongo = mongoose.model('crypto', cryptoSchema);

  module.exports=cryptoMongo;