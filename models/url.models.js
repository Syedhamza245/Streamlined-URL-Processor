const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortURL : {
        type: String,
        unique: true,
        required: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory : [ { timestamp : { type: Number } } ]
}, {timestamps: true})

const URL = mongoose.model('url', urlSchema)

module.exports= URL