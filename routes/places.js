const express = require("express");
const Places = require("../database/placesdb");
var router = express.Router();

// ======
// Create
// ======
router.post("/", function (req, res, next) {
  const place = {
    title: req.body.title,
    description: req.body.description,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    openhoursstart: req.body.openhoursstart,
    openhoursend: req.body.openhoursend,
  };
  const keywords = req.body.keywords;
  Places.create(place, keywords, (e, place) => {
    if (e) {
      console.log(e);
      res.sendStatus(500);
    } else {
      res.send(place);
    }
  });
  //next();
});

// =========
// Read many
// =========
router.get("/", function (req, res, next) {
  let query = req.query.title || {};
  console.log("get query " + JSON.stringify(query));
  Places.getByTitle(query, (e, result) => {
    if (e) {
      res.status(500).send(e);
      console.log(e.message);
    } else {
      res.send(result);
    }
  });
});

// ========
// Read one
// ========
router.get("/:_id", function (req, res, next) {
  const { _id } = req.params;
  console.log("get by id" + _id);
  Places.get(_id, (e, result) => {
    if (e) {
      res.status(500).send(e);
      console.log(e.message);
    } else {
      res.send(result);
    }
  });
});

// ======
// Update
// ======
router.put("/:_id", function (req, res, next) {
  const place = {
    title: req.body.title,
    description: req.body.description,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    openhoursstart: req.body.openhoursstart,
    openhoursend: req.body.openhoursend,
    keywords: req.body.keywords,
  };
  Places.update({ _id: req.params }, place, (e) => {
    if (e) res.sendStatus(500);
    else res.sendStatus(200);
  });
  //next();
});

// ======
// Remove
// ======
router.delete("/:_id", function (req, res, next) {
  Places.remove({ _id: req.params }, (e) => {
    if (e) res.status(500).send(e);
    else res.sendStatus(200);
  });
});

// ======
// Routes
// ======

/*router.post("/", create);
  router.get("/", getByTitle);
  router.get("/:_id", get);
  router.put("/:_id", update);
  router.delete("/:_id", remove); */

module.exports = router;
