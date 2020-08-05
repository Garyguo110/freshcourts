let crypto = require('crypto');

class SessionData {
  constructor(court, date, timeSlot, isAvailability) {
    this.id = generateId(court.id, date, timeSlot);
    this.court = court;
    this.date = date;
    this.timeSlot = timeSlot;
    this.isAvailability = isAvailability;
  }

  getDescription() {
    var availableText = this.isAvailability ? 'available' : 'unavailable';
    return `Session for court ${this.court.name} on 
    ${this.date} at ${this.timeSlot} is ${availableText}`;
  }
}

function generateId(courtId, date, timeSlot) {
  return crypto
    .createHash('md5')
    .update(courtId + date + timeSlot)
    .digest('hex');
}

exports.init = function (court, date, timeSlot, isAvailability) {
  return new SessionData(court, date, timeSlot, isAvailability);
};
