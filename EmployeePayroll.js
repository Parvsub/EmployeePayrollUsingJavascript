class EmployeePayroll{
    id;
    salary;
    gender;
    startDate;
  
    constructor(...params) {
      this.id = params[0];
      this.name = params[1];
      this.salary = params[2];
      this.gender = params[3];
      this.startDate = params[4];
    }
    getName() {
        return this._name;
      }
      setName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if (nameRegex.test(name)) {
          this.name = name;
        } else throw 'name is incorrect';
      }
   
  
    toString() {
      return (
        'id=' +
        this.id +
        ', name=' +
        this.name +
        ', salary=' +
        this.salary +
        ', gender=' +
        this.gender +
        ', start date:' +
        this.startDate
      );
    }
  }
  
  let employeePayroll = new EmployeePayroll(
    1,
    'Praveen',
    300000,
    'M',
    new Date().toJSON().slice(0, 10)
  );
  console.log(employeePayroll.toString());
  try {
    employeePayroll.setName('Mohan');
  } catch (error) {
    console.log(error);
  }
  console.log(employeePayroll.toString());