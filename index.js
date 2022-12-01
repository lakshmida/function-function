const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");
const name = "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";

const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};
module.exports = getPeopleInCity;
