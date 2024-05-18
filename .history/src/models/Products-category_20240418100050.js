const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)
const Schema = mongoose.Schema;

const ProductCategory = new Schema({
  title:  String ,
  parent_id: {
    type : Boolean,
    default : "",
  },
  description: String,
  thumbnail: String,
  status: String,
  position: Number,
  slug: { 
    type: String,
    slug: "title",
    unique: true
  },
  deleted: {
    type : Boolean,
    default : false
  },
  deletedAt : Date,

},{
  timestamps :true
})

module.exports=mongoose.model('Product', ProductCategory, 'products-category');