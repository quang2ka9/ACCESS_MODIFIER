"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.display = function () {
        return EmployeeManager.employeeList;
    };
    EmployeeManager.prototype.add = function (employee) {
        EmployeeManager.employeeList.push(employee);
    };
    EmployeeManager.prototype.infoEmployee = function (employee) {
        return employee;
    };
    EmployeeManager.prototype["delete"] = function (index) {
        EmployeeManager.employeeList.splice(index, 1);
    };
    EmployeeManager.prototype.edit = function (index, firstName) {
        EmployeeManager.employeeList[index] = firstName;
    };
    EmployeeManager.employeeList = [];
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
