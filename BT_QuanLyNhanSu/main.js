"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var EmployeeManager_1 = require("./EmployeeManager");
var employee = new Employee_1.Employee('Le', 'Quang', '1-1-2222', 'HaNoi', 'NhanVien');
var employee1 = new Employee_1.Employee('Ha', 'Nam', '6-2-2234', 'ThanhHoa', 'QuanLy');
var employee2 = new Employee_1.Employee('Pha', 'Minh', '5-5-2245', 'HaNam', 'GiamDoc');
var employee3 = new Employee_1.Employee('Dang', 'Long', '2-7-2256', 'Vinh', 'NhanVien');
var employeeManager = new EmployeeManager_1.EmployeeManager();
employeeManager.add(employee);
employeeManager.add(employee1);
employeeManager.add(employee2);
employeeManager.add(employee3);
employeeManager["delete"](3);
console.log(employeeManager.display());
