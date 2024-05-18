const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Roles = new Schema({
  title:  String ,
  description: String,
  deleted: {
    type : Boolean,
    default : false
  },
  deletedAt : Date,
},{
  timestamps :true
})

module.exports=mongoose.model('Role', Roles, 'roles');