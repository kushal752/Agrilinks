var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create usermodels schema and model
var UsermodelsSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    market_id: {
        type: String,
        required: true
    },
    market_name: {
        type: String,
        required: true
    },
    cmdty_id: {
        type: String,
        required: true
    },
    market_type: {
        type: String,
    },
    cmdty_name: {
        type: String,
        required: true
    },
    price_unit: {
        type: String,
        required: true
    },
    conv_fctr: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

var Usermodels = mongoose.model('usermodel', UsermodelsSchema);

module.exports = Usermodels;
