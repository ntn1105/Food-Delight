const mongoose= require('mongoose')
 function connect(){
    try {
        mongoose.connect('mongodb://localhost/mongodb')
        console.log('connect thanh cong')
    } catch (error) {
        console.log('fail')
    }
}

module.exports= { connect }