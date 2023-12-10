import mongoose, { Schema } from "mongoose";

const SubSchema = new Schema({
  index: {
    type: Number,
    required: true,
  },
  guid: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  eyeColor: {
    type: String,
    required: true,
  },
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  company: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Assicurati che l'email sia unica nel database
    match: [/.+@.+\..+/, "Please fill a valid email address"], // Validazione semplice dell'email
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  registered: {
    type: Date,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  range: {
    type: [Number],
    required: true,
  },
  friends: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  greeting: {
    type: String,
    required: true,
  },
  favoriteFruit: {
    type: String,
    required: true,
  },
});

export const Sub = mongoose.model("subscribers", SubSchema);
