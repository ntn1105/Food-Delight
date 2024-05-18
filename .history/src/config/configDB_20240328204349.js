const mongoose= require('mongoose')
 function connect(){
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log('connect thanh cong')
    } catch (error) {
        console.log('fail')
    }
}

module.exports= { connect }