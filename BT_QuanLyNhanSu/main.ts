import {Employee} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";
let employee = new Employee('Le','Quang','1-1-2222','HaNoi','NhanVien')
let employee1 = new Employee('Ha','Nam','6-2-2234','ThanhHoa','QuanLy')
let employee2 = new Employee('Pha','Minh','5-5-2245','HaNam','GiamDoc')
let employee3 = new Employee('Dang','Long','2-7-2256','Vinh','NhanVien')

let employeeManager = new EmployeeManager();
employeeManager.add(employee);
employeeManager.add(employee1);
employeeManager.add(employee2);
employeeManager.add(employee3);

employeeManager.delete(3)
console.log(employeeManager.display())