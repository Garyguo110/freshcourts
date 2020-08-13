class CourtData {
  constructor(id, name, location) {
    this.id = id;
    this.name = name;
    this.location = location;
  }
}

exports.init = function (id, name, location) {
  return new CourtData(id, name, location);
};
