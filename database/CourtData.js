class CourtData {
    constructor(id, name, location, hours) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.hours = hours;
    }
}

exports.init = function(id, name, location, hours) {
    return new CourtData(id, name, location, hours);
}