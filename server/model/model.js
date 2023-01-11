const mongoose = require ('mongoose')

const userschema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    gender:String,
    status:String,
},
    {
    timestamps: true
    }
)

const UserDB = mongoose.model('userdata',userschema)
module.exports = UserDB