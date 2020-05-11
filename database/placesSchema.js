var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var placesSchema = new Schema(
  {
    title: {
      type: String,
      unique: false,
      required: true,
    },
    description: {
      type: String,
      unique: false,
      required: true,
    },
    longitude: {
      type: Number,
      unique: false,
      required: true,
    },
    latitude: {
      type: Number,
      unique: false,
      required: true,
    },
    openhoursstart: {
      type: String,
      unique: false,
      required: true,
    },
    openhoursend: {
      type: String,
      unique: false,
      required: true,
    },
    keywords: [{ type: Schema.Types.ObjectId, ref: "Keywords" }],
  },
  {
    timestamps: true,
  }
);

module.exports = placesSchema;
