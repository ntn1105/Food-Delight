const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Accounts = new Schema({
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
  deleted: {
    type : Boolean,
    default : false
  },
  deletedAt : Date,

},{
  timestamps :true
})

module.exports=mongoose.model('Accounts', Accounts, 'accounts');