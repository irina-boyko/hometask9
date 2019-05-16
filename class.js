function Employee(name, department, periodOfService) {
    this.name = name;
    this.department = department;
    this.periodOfService = periodOfService;
}

Employee.prototype.employeeDescription = function () {
    return this.name + ' works in ' + this.department + ' department for ' + this.periodOfService + ' years';
};

Employee.prototype.additionalInfo = {
    isHeadOfDepartment : false
};

let boykoIrina = new Employee ('Irina', 'administration',  2) ;
let pawelRosolko = new Employee ('Pawel', 'Front-End', 5);
let yurkevichVladimir = new Employee ('Vladimir','Front-End', 10);

yurkevichVladimir.additionalInfo = {};
yurkevichVladimir.additionalInfo.isHeadOfDepartment = true;


