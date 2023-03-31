class EmployeePayroll{
    //property
    id;
    salary;

    //Constructor
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary=salary;
    }
     //getter and setter method
     get name(){return this.name;}
     set name(name){this._name = name;}

      //method
    toString(){
        return "id=" +this.id +",name='"+ this._name +",salary="+ this.salary;
    }
}

let employeePayroll = new EmployeePayroll(1,"Mark",30000);
console.log(EmployeePayroll.toString());
EmployeePayroll.name ="Mohan";
console.log(EmployeePayroll.toString());