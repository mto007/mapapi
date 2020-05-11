var mongoose = require("mongoose");
var keywordsSchema = require("./keywordsSchema");

keywordsSchema.statics = {
  create: function (data, cb) {
    var keyword = new this(data);
    keyword.save(cb);
  },

  get: function (id, cb) {
    console.log("find keyword by id" + id);
    this.findById(id, cb);
  },

  getAll: function (cb) {
    this.find({}, cb);
  },

  update: function (query, updateData, cb) {
    console.log("updating here" + JSON.stringify(updateData));
    var qu = query._id._id;
    var filter = { _id: qu };
    this.findOneAndUpdate(filter, { $set: updateData }, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

var keywordsModel = mongoose.model("Keywords", keywordsSchema);
module.exports = keywordsModel;
