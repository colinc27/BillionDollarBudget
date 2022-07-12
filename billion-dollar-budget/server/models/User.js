const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const Assests = require('./Assets');
const Liabilities = require('./Liabilities');
const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']    
    },
    password:{
        type: String, 
        required: true,
        minlength: 4
    },
    assests: [
        {
            type: Schema.Types.ObjectId,
                ref: 'Assets'
            }
            ],
    liabilities: [
        {
            type:Schema.Types.ObjectId,
                ref:'Liabilities'
                }
            ]
},
{
    toJSON:{getters:true}
}
);

UserSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});
UserSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};
const User = model('User', UserSchema);
module.exports= User;