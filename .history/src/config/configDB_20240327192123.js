const mongoose= require('mongoose')
 function connect(){
    try {
         mongoose.connect('mongodb://localhost:27017/F8')
        console.log('connect thanh cong')
    } catch (error) {
        console.log('fail')
    }
}

module.exports= { connect }