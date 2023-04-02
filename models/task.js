const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name must not be blank"],
        trim: true,
        maxlength: [50, "name should not be more than 50 characters"],
    },
    completed:{
        type: Boolean,
        default: false,

    } ,
})

module.exports = mongoose.model('Tasks', TaskSchema)