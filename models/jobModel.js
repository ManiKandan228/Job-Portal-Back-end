const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema(
    {
        Id: {
            type : Number,
            required : true,
            unique:true
        },
        jobTitle : {
            type : String,
            required : true
        },
        company : {
            type : String,
            required : true
        },
        location : {
            type : String,
            required : true,
            unique:true
        },
        salary : {
            type : String,
            required : true
        },
        postedDate : {
            type : String,
            required : true
        },
        deadline : {
            type : String,
            required : true
        },
        requirements : {
            type : String,
            required : true
        },
    },
    {
        collection : 'job'
    }
)
module.exports = mongoose.model('job', jobSchema)