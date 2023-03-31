class EmployeePayroll{
    //property
    id;
    salary;
    gender;
    startDate;

    //Constructor
    constructor(params){
        this.id = params[0];
        this.name = params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate = params[4];
    }
    //getter and setter method
    get name(){return this.name;}
    set name(name){this._name = name;}

    //method
    toString(){
        const options = { year : 'numeric',month: 'long', day: 'numeric'};
        const employeeDate = this.startDate === undefined ? "undefined":
        this.startDate.toLocalDateString("en-US", options);
        return "id=" + this.id +",name='" + this._name +",salary="+this.salary+","+
        "gender"+this.gender+",startDate="+employeeDate; 
    }
}

let employeePayroll = new EmployeePayroll(1,"Mark",30000);
console.log(EmployeePayroll.toString());
EmployeePayroll.name ="Mohan";
console.log(EmployeePayroll.toString());
let newEmployeePayroll = new EmployeePayroll(1,"Terrisa",30000,"F",new Date());
console.log(newEmployeePayroll.toString());