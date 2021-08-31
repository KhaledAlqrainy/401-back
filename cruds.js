'use strict'

const axios = require('axios')
const cryptoMongo = require('./mongo')


const creatFav = async (req,res) => {
    const {title, description, toUSD, image_url} = req.body;
    const newObj = new cryptoMongo ({
        title: title,
        description:description,
        toUSD:toUSD,
        image_url:image_url
    })
    newObj.save();
    res.send(newObj);
};

const getFav = async (req,res)=> {
    cryptoMongo.find({}, (err,data) =>{
        res.send(data)
    })
};

const deleteFav = async (req,res) => {
    const {c_id} = req.params;
    cryptoMongo.remove({_id:c_id}, (err,data)=> {
        cryptoMongo.find({}, (err,data) =>{
            res.send(data)
        })
    })
};

const updateFav = async (req,res)=> {
    const {c_id} = req.params;
    const {title, description, toUSD, image_url} = req.body;
    cryptoMongo.findByIdAndUpdate({_id:c_id}, {title, description, toUSD, image_url}, {new:true}, (err,data)=> {
        res.send(data)
    })
};



module.exports= {
    creatFav,
    getFav,
    deleteFav,
    updateFav
}