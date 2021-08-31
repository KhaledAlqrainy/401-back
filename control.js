'use strict';

const axios = require('axios');
const cryptoModel = require('./models')


const getCrypto = async (req,res) => {
    await axios.get('https://crypto-explorer.herokuapp.com/crypto-list/').then(data=> {
        const response = data.data.map(i=> {
            return new cryptoModel(i);
        })
        res.send(response)
    }).catch(err => {
        console.log(err);
    })
}

module.exports=getCrypto