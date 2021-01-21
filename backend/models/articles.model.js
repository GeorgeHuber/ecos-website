const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    
        Title:{
            type:String,
            required:true
        },
        Author:{
            type:String,
            required:true
        },
        Id:{
            type:String,
            required:true
        },
        Main_Image:{
            type:String,
            required:true
        },
        Description:{
            type:String,
            required:true
        },
        Body:{
            type:String,
            required:true
        },
        Other_Images:{
            type:Array,
            required:false
        }
       

},{
    timestamps:true
})

const Article=mongoose.model("Article", articleSchema,"articles");

module.exports=Article;