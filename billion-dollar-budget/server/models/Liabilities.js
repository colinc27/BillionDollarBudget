const { Schema, model } = require("mongoose");

const LiabilitiesSchema = new Schema(
  {
    rent: {
      type: Number
    },
    utilities: {
      type: Number
    },
    reoccurringBills: {
      type: Number
    },
    gas: {
      type: Number
    },
    food: {
      type: Number
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
    toJSON: { getters: true },
  }
);

const Liabilities = model("Liabilities", LiabilitiesSchema);
module.exports = Liabilities;
