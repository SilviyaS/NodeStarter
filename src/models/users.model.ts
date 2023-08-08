import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import _ from 'lodash';
import timestamps from 'mongoose-timestamp';

const UserSchema = mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    phone: String,
    gbsId: {type: String, required: true, unique: true},
    roles: Array,
    password: String
},{
    toJSON: {
        transform(doc: any, ret: any, options: any): void {
            const sanitized = _.omit(ret, '__v', '_id', 'password');
            sanitized.id = doc._id;
            return sanitized;
        }
    }
});

UserSchema.pre('save', async function (next: any) {
    let user = this;
    console.log(this);
    if(!user.isModified('password'))
        return next();

    bcrypt.genSalt(10, function (err: any, salt: any) {
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function (err: any, hash: any) {
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});
UserSchema.plugin(timestamps);

let UserModel = mongoose.model('User', UserSchema);

UserModel.getAll = (): any => {
    return UserModel.find({});
}
UserModel.addUser = (userToAdd: any): any => {
    return userToAdd.save();
}

export default UserModel;