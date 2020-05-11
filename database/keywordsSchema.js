var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const keywordsSchema = new Schema(
  {
    label: {
      type: String,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = keywordsSchema;
