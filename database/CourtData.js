class CourtData {
  constructor(id, name, location) {
    this.id = id;
    this.name = name;
    this.location = location;
  }

  toDict() {
    return {
      id: this.id,
      name: this.name,
      location: this.location,
    };
  }
}

exports.init = function (id, name, location) {
  return new CourtData(id, name, location);
};
