const { Schema, model } = require("mongoose");

const paycheckSchema = new Schema(
  {
    salary: {
      type: Number,
      required:true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String
    },
    monthName: {
      type: String
    },
    year: {
      type: String
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Assets = model("Assets", paycheckSchema);
module.exports = Assets;
