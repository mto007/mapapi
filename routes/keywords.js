const express = require("express");
const Keywords = require("../database/keywordsdb");
var router = express.Router();

// ======
// Create
// ======
router.post("/", function (req, res, next) {
  console.log("here keyw");
  const keyword = {
    label: req.body.label,
  };
  console.log("here " + JSON.stringify(keyword));
  Keywords.create(keyword, (e, keyword) => {
    if (e) {
      console.log(e);
      res.sendStatus(500);
    } else {
      res.send(keyword);
    }
  });
  //next();
});

// =========
// Read all
// =========
router.get("/", function (req, res, next) {
  console.log("get ");
  Keywords.getAll((e, result) => {
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
  Keywords.get(_id, (e, result) => {
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
  console.log("changing");
  const keyword = {
    label: req.body.label,
  };
  Keywords.update({ _id: req.params }, keyword, (e) => {
    if (e) res.sendStatus(500);
    else res.sendStatus(200);
  });
  //next();
});

// ======
// Remove
// ======
router.delete("/:_id", function (req, res, next) {
  Keywords.remove({ _id: req.params }, (e) => {
    if (e) res.status(500).send(e);
    else res.sendStatus(200);
  });
});

// ======
// Routes
// ======

/*router.post("/", create);
  router.get("/", getAll);
  router.get("/:_id", get);
  router.put("/:_id", update);
  router.delete("/:_id", remove); */

module.exports = router;
