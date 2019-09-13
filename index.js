/**
 * TimeDiff class needs to be initialize to be able to access the methods.
 * The initial time is taken from the moment the object is initialized.
 */
class TimeDiff {
  constructor() {
    this._initialTime = new Date();
    this._timePoints = new Map();
  }
  /**
   * Getter to receive the time taken from the time the object has been initialized to the time this getter is called
   */
  get timeTaken() {
    return new Date().getTime() - this._initialTime.getTime();
  }
  /**
   * Method that returns the time taken from the initialization of the object to the moment this method is called.
   * @param {string} timeUnit Unit of time that the difference will be displayed. Options: ["seconds","minutes","hours","milliseconds","days"]
   */
  getTimeTaken(timeUnit = "seconds") {
    const diff = new Date().getTime() - this._initialTime.getTime();
    let time;
    switch (timeUnit) {
      case "seconds":
        time = diff / 1000;
        break;
      case "minutes":
        time = diff / 1000 / 60;
        break;
      case "hours":
        time = diff / 1000 / 3600;
        break;
      case "days":
        time = diff / 1000 / 3600 / 24;
        break;
      default:
        time = diff;
        break;
    }
    return time;
  }
  /**
   * Adds a new Time Point to the internal array.
   * @param {String} costumeName Optional Name of the time point to be created
   */
  addPoint(costumeName) {
    this._timePoints.set(
      costumeName ? costumeName : this._timePoints.size,
      new Date()
    );
    return costumeName
      ? this._timePoints.get(costumeName)
      : this._timePoints.get(this._timePoints.size - 1);
  }
  /**
   * Returns the Time Point Object incluiding the time difference beteween initialization to the point creation.
   * @param {String} name Name of the Time Points that will be returned with its properties.
   */
  getTimePoint(name) {
    if (name && this._timePoints.has(name)) {
      return {
        name,
        timeRecorded: this._timePoints.get(name),
        timeDifference: this._getDifferenceObject(
          this._initialTime,
          this._timePoints.get(name)
        )
      };
    } else {
      return "No time point with this name found";
    }
  }
  /**
   * Gets all time points from the internal Array
   */
  get allTimePoints() {
    const resObj = [];
    if (!this._timePoints.size) return "No time points added";
    for (var [key, value] of this._timePoints.entries()) {
      resObj.push({
        name: key,
        timeRecorded: value,
        timeDifference: this._getDifferenceObject(this._initialTime, value)
      });
    }
    return resObj;
  }
  _getDifferenceObject(start, end) {
    if (!(start instanceof Date && end instanceof Date))
      return "Must be instances of Date Class";
    const milliseconds = end.getTime() - start.getTime();
    const seconds = milliseconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    return { milliseconds, seconds, minutes, hours };
  }
}
module.exports = TimeDiff;
