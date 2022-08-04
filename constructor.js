var id=1000;

const allEmployees =[];

function Employee ( fullNameValue, departmentValue, levelValue, imageValue) {
 this.id= function(counter){
    console.log(counter);
    id=id+1
};
 this.fullName = fullNameValue;
 this.department = departmentValue;
 this.level = levelValue;
 this.image = imageValue;
 this.salary = function (level) {
    let min =0;
    let max =0;

if (level == "Junior") {
    min = 500;
    max = 1000;
    let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
   return randomSalary
} else if (level == "Mid-Senior") {
    min = 1000
    max = 1500;
    let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
 return randomSalary
} else if (level == "Senior") {
    min = 1500;
    max = 2000;
    let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
    return randomSalary
}

    let netIncome = math.floor(randomSalary*0.925);

    return netIncome;
}
allEmployees.push(this);
}
 Employee.prototype.renderingInfo = function () {
    document.write(`<p> Employee name: ${this.fullName} <br> Department:  ${this.department} <br> Employee salary: ${this.salary(this.level)} <br> </p><br>`)};





 const emp1 = new Employee("Ghazi Samer", "Administration", "Senior")
 const emp2 = new Employee("Lana Ali", "Finance", "Senior")
 const emp3 = new Employee("Tamara Ayoub", "Marketing", "Mid-Senior")
 const emp4 = new Employee("Safi Walid", "Administration", "Senior")
 const emp5 = new Employee("Omar Zaid", "Development", "Junior")
 const emp6 = new Employee("Rana Saleh", "Development", "Mid-Senior")
 const emp7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior")





 emp1.renderingInfo();
 emp2.renderingInfo();
 emp3.renderingInfo();
 emp4.renderingInfo();
 emp5.renderingInfo();
 emp6.renderingInfo();
 emp7.renderingInfo();
