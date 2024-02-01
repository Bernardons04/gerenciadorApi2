const mongoose = require("mongoose")

const bcryptjs = require("bcryptjs")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        //select: false,
    }
}, {
    autoCreate: false,
    id: false,
    versionKey: false,
    timestamps: true
});

userSchema.pre("save", async function(next) {
    const hash = await bcryptjs.hash(this.password, 10)
    this.password = hash;
    next();
})

const User = mongoose.model('User', userSchema)

module.exports = {
    User,
    userSchema,
}