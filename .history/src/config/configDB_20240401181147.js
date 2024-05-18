const mongoose= require('mongoose')
 function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('connect thanh cong')
    } catch (error) {
        console.log('fail')
    }
}

module.exports= { connect }