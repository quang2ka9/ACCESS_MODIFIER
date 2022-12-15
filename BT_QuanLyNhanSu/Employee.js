"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, birthday, address, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
        this.role = role;
    }
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getBirthday = function () {
        return this.birthday;
    };
    Employee.prototype.getAddress = function () {
        return this.address;
    };
    Employee.prototype.getRole = function () {
        return this.role;
    };
    return Employee;
}());
exports.Employee = Employee;
