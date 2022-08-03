


//first i will make the functions for the random id number and random salary

//then a function for calculating the net salary 


function idGenerator(min, max) {

return Math.floor(Math.random() * (max - min + 1) + min);

}



function salaryGenerator(level) {
    let min = 0;
    let max = 0;
    if (level == "Junior") {
        min = 500;
        max = 1000;
        let salary = Math.floor(Math.random() * (max - min + 1) + min);
        return salary;
    } else if (level == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let salary = Math.floor(Math.random() * (max - min + 1) + min);
        return salary;
    } else if (level == "Senior") {
        min = 1500;
        max = 2000;
        let salary = Math.floor(Math.random() * (max - min + 1) + min);
        return salary;
    }
    return salary;

}
console.log(salaryGenerator('Junior'));

function netSalary(level) {
   let salary = salaryGenerator(level);
    netIncome = salary*0.925;
    
    return netIncome;
}

console.log(netSalary('Senior'));

//Objects >>>>>>>>>

const emp1 = {
    exmployeeid : function (){return console.log(idGenerator(1000,1001))},
    fullname : "Ghazi Samer",
    department : "adminstration",
    level : "Senior",
    imageURl :"https://www.arcbuildingsolutions.co.uk/wp-content/uploads/2022/03/EOTM_02-2022_Nicola_Morton-1_edited6x4-852x568.jpg",
    salary : function (){return netSalary(this.level)}

}

const emp2 = {
    exmployeeid : function (){return console.log(idGenerator(1002,1003))},
    fullname : "Lana Ali",
    department : "finance",
    level : "Senior",
    imageURl :"https://i1.sndcdn.com/avatars-000302050163-f4firz-t500x500.jpg",
    salary : function (){return netSalary(this.level)}
}

const emp3 = {
    "exmployee id" : function (){return console.log(idGenerator(1004,1005))},
    fullname : "Tamara Ayoub",
    department : "marketing",
    level : "Senior",
    imageURl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3oeXGgKcMBlnh9_J89LJfm8RaA3NZGwrnA&usqp=CAU",
    salary : function (){return netSalary(this.level)}
}

const emp4 = {
    exmployeeid : function (){return cnosole.log(idGenerator(1006,1007))},
    fullname : "Safi Walid",
    department : "adminstration",
    level : "Mid-Senior",
    imageURl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99nqGQ5PzIigScbicjjCLU69Lvh_xKrxGlw&usqp=CAU",
    salary : function (){return netSalary(this.level)}
}

const emp5 = {
    exmployeeid : function (){return console.log(idGenerator(1008,1009))},
    fullname : "Omar Zaid",
    department : "development",
    level : "Senior",
    imageURl :"https://images.squarespace-cdn.com/content/v1/61424eefdf8fd3232cffe428/1634751475745-81K7EWWJUUW5CNR0TWOS/MB.jpg",
    salary : function (){return netSalary(this.level)}
}

const emp6 ={
    exmployeeid : function (){return console.log(idGenerator(1010,1011))},
    fullname : "Omar Zaid",
    department : "development",
    level : "Senior",
    imageURl :"https://seeyouatbills.com/wp-content/uploads/2021/10/OCT-21-.jpeg",
    salary : function (){return netSalary(this.level)} 
}


const emp7 = {
    exmployeeid : function (){return console.log(idGenerator(1012,1013))},
    fullname : "Rana Saleh",
    department : "development",
    level : "Junior",
    imageURl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPbbcPhM7EU0cqsaq2Phi4VLPun48JC9AKw&usqp=CAU",
    salary : function (){return netSalary(this.level)} 
}

const emp8 ={
    exmployeeid : function (){return console.log(idGenerator(1014,1015))},
    fullname : "Hadi Ahmad",
    department : "finance",
    level : "Mid-Senior",
    imageURl :"https://www.thecontactcompany.co.uk/wp-content/uploads/2021/12/IMG_1787.jpg",
    salary : function (){return netSalary(this.level)} 
}


function finalInfo(emp) {
 hisFullName = "Employee Name: " + emp.fullname;
 income = "Employee Salary: " + emp.salary();

 console.log(hisFullName);
 console.log(income);
}

console.log(finalInfo(emp1));
console.log(finalInfo(emp2));
console.log(finalInfo(emp3));
console.log(finalInfo(emp4));
console.log(finalInfo(emp5));
console.log(finalInfo(emp6));
console.log(finalInfo(emp7));
console.log(finalInfo(emp8));

