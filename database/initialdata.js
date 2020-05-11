const Places = require("../database/placesdb");
const Keywords = require("../database/keywordsdb");

module.exports.addData = () => {
  let keyword = {
    label: "restaurant",
  };
  Keywords.create(keyword, (e, keyword) => {
    if (e) {
      console.log(e);
    }
  });
  keyword = {
    label: "sushi",
  };
  Keywords.create(keyword, (e, keyword) => {
    if (e) {
      console.log(e);
    }
  });
  let keywordsIds;
  let place = {
    title: "Herkku Duo",
    description: "Ruokakauppa",
    latitude: 61.4509034,
    longitude: 23.8514239,
    openhoursstart: "08:00",
    openhoursend: "21:00",
  };
  console.log("here " + JSON.stringify(place));
  Places.create(place, keywordsIds, (e, place) => {
    if (e) {
      console.log(e);
    }
  });
  place = {
    title: "Tapolan mustamakkara",
    description: "parasta mustaa",
    latitude: 61.4980214,
    longitude: 23.7603118,
    openhoursstart: "12:00",
    openhoursend: "22:00",
  };
  console.log("here " + JSON.stringify(place));
  Places.create(place, keywordsIds, (e, place) => {
    if (e) {
      console.log(e);
    }
  });
};
