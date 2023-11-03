import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
   /*  isProvider: {
        type: Boolean,
        required: true,
    },
    services: [
        serviceSchema
    ] */
});

const User = mongoose.model('User', userSchema);

export default User