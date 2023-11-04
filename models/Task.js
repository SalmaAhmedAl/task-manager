const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name: {
    //build-in validator
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});
//models are the representation for the data in the database / collection

module.exports = mongoose.model('Task', TaskSchema); //Task is the name of the model, TaskSchema is the schema of the model