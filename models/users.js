const mongoose 	 = require('mongoose');
const bcrypt   	 = require('bcrypt');
const saltRounds = 10;//untuk random hash password

const Schema 	 = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		trim: true,//berfungsi menghilangkan spasi pada string
		required: true,
	},
	email: {
		type: String,
		trim: true,
		required: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	}
});
//pre = prefix
UserSchema.pre('save', function(next){
	this.password = bcrypt.hashSync(this.password, saltRounds);
	next();
});

module.exports = mongoose.model('User', UserSchema);