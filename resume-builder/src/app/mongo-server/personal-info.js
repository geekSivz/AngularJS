var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoAppTest');


var Schema = mongoose.Schema;
var ProductSchema = new Schema({
	title : String,
	price : Number,
	instock : Boolean,
	photo : String,
});
module.exports = mongoose.model('personal_info', ProductSchema);