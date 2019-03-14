const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

// creating schema for the member
const memberSchema = new mongoose.Schema({
	username: { type: String, reqiured:true, default: '' },
	email: { type: String, required: true, default: '' },
	password: { type: String, required: true, default: '' },
	isDeleted: { type: Boolean },
	signUpDate: { type: Date }
})

//Schema method for hashing password
memberSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//Schema method for comparing password
memberSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
};

//compiling the member schema to model and exporting
const SiteMember = mongoose.model("Member",memberSchema);
module.exports = SiteMember;