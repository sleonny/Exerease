const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  user: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

// Hash the password before saving the user model
const saltRounds = 10;
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Check if the entered password is correct when logging in
userSchema.methods.comparePassword = async function (plainPassword, callback) {
  return await bcrypt.compare(plainPassword, this.password, callback);
};

const User = model("User", userSchema);

module.exports = User;
