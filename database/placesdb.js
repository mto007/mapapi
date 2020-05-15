var mongoose = require("mongoose");
var placesSchema = require("./placesSchema");

placesSchema.statics = {
  create: function (data, keywords, cb) {
    var place = new this(data);
    if (keywords !== undefined) {
      for (var i = 0; i < keywords.length; i++) {
        place.keywords.push(keywords[i]);
      }
    }
    place.save(cb);
  },

  get: function (id, cb) {
    console.log("find by id" + id);
    this.findById(id, cb).populate("keywords");
  },

  getByTitle: function (query, cb) {
    this.find({ title: new RegExp(query, "i") }, cb).populate(
      "keywords.keywordsSchema"
    );
  },

  update: function (query, updateData, cb) {
    title = updateData.title;
    description = updateData.description;
    latitude = updateData.latitude;
    longitude = updateData.longitude;
    openhoursstart = updateData.openhoursstart;
    openhoursend = updateData.openhoursend;
    keywords = updateData.keywords;
    let update = {
      title,
      description,
      latitude,
      longitude,
      openhoursstart,
      openhoursend,
      keywords,
    };

    var qu = query._id._id;
    console.log("updating here id" + qu);
    var filter = { _id: qu };
    this.findOneAndUpdate(filter, { $set: update }, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

var placesModel = mongoose.model("Places", placesSchema);
module.exports = placesModel;
