const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)
const Schema = mongoose.Schema;

const Product = new Schema({
  title:  String ,
  products_category_id:{
    type : String,
    default :""
  },
  description: String,
  price:  Number,
  discountPercentage:  Number,
  stock:  Number,
  thumbnail: String,
  status: String,
  position: Number,
  slug: { 
    type: String,
    slug: "title",
    unique: true
  },
  createdBy:{
    account_id: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  deleted: {
    type : Boolean,
    default : false
  },
  deletedBy:{
    account_id: String,
    deletedAt: {
      type: Date,
      default: Date.now
    }
  }

},{
  timestamps :true
})

module.exports=mongoose.model('Product', Product, 'products');