const mongoose = require("mongoose");
const { schema } = mongoose;
const unipueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
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
  date: {
    type: Date,
    default: Date.now(),
  },
  bio: {
    type: String,
    required: false,
    default: "No Bio",
  },
  mobile: {
    type: Number,
    required: false,
  },
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

//userSchema.plugin(unipueValidator, { message: "Email already in use" });

const User = mongoose.model("user", userSchema);
module.exports = User;
