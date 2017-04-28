var db = require('./db-config');
var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
	questionText : String,
	votes : Number,
	answered : Boolean,
	// timestamps: { createdAt: 'created_at' },
});

//exporting the questionQueue schema with questionQueue instance
module.exports = mongoose.model('Question', questionSchema);
