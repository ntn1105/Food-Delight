const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Accounts = new Schema({
  fullName:  String,
  email: String,
  password: String,
  token: String,
  phone: String,
  avata: String,
  deleted: {
    type : Boolean,
    default : false
  },
  deletedAt : Date,
},{
  timestamps :true
})

module.exports=mongoose.model('Accounts', Accounts, 'accounts');