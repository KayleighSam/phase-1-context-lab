/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    });
    return this;
}
function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    });
    return this;
}
function hoursWorkedOnDate(targetDate) {
    let timeIn = this.timeInEvents.find(event => event.date === targetDate);
    let timeOut = this.timeOutEvents.find(event => event.date === targetDate);
    return (timeOut.hour - timeIn.hour) / 100;
}
function wagesEarnedOnDate(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}
function allWagesFor() {
    return this.timeInEvents.reduce((total, timeIn) => {
        return total + wagesEarnedOnDate.call(this, timeIn.date);
    }, 0);
}
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employee) => {
        return total + allWagesFor.call(employee);
    }, 0);
}

