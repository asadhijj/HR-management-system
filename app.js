
var id=1000; 


//Objects >>>>>>>>>

const emp1 = {
    exmployeeid : function(counter){
        console.log(counter);
        console.log("Employee Name: "+ this.fullname)
        id=id+1;

    },
    fullname : "Ghazi Samer",
    department : "adminstration",
    level : "Senior",
    imageURl :"https://www.arcbuildingsolutions.co.uk/wp-content/uploads/2022/03/EOTM_02-2022_Nicola_Morton-1_edited6x4-852x568.jpg",
    randomSalary : function (rank) {
        let min =0;
        let max =0;
   
    if (rank == "Junior") {
        min = 500;
        max = 1000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
       return randomSalary
    } else if (rank == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
     return randomSalary
    } else if (rank == "Senior") {
        min = 1500;
        max = 2000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary
    }

        let netIncome = math.floor(randomSalary*0.925);

<<<<<<< HEAD
        console.log("Employee salary: " + netIncome);
=======
        return netIncome
>>>>>>> 41d7cd2 (editedd)
    }

    }

const emp2 = {
    exmployeeid :  function(counter){
        console.log(counter);
        console.log("Employee Name: "+ this.fullname)
        id++
    },
    fullname : "Lana Ali",
    department : "finance",
    level : "Senior",
    imageURl :"https://i1.sndcdn.com/avatars-000302050163-f4firz-t500x500.jpg",
    randomSalary : function (rank) {
        let min =0;
        let max =0;
   
    if (rank == "Junior") {
        min = 500;
        max = 1000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
       return randomSalary
    } else if (rank == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
     return randomSalary
    } else if (rank == "Senior") {
        min = 1500;
        max = 2000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary
    }

        let netIncome = math.floor(randomSalary*0.925);

<<<<<<< HEAD
        console.log("Employee salary: " + netIncome);
=======
        return netIncome
>>>>>>> 41d7cd2 (editedd)
    }
}

const emp3 = {
    exmployeeid : function(counter){
        console.log(counter);
        console.log("Employee Name: "+ this.fullname)
        id++;
    },
    fullname : "Tamara Ayoub",
    department : "marketing",
    level : "Senior",
    imageURl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3oeXGgKcMBlnh9_J89LJfm8RaA3NZGwrnA&usqp=CAU",
    randomSalary : function (rank) {
        let min =0;
        let max =0;
   
    if (rank == "Junior") {
        min = 500;
        max = 1000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
       return randomSalary
    } else if (rank == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
     return randomSalary
    } else if (rank == "Senior") {
        min = 1500;
        max = 2000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary
    }

        let netIncome = math.floor(randomSalary*0.925);

<<<<<<< HEAD
        console.log("Employee salary: " + netIncome);
=======
        return netIncome
>>>>>>> 41d7cd2 (editedd)
    }
}

const emp4 = {
    exmployeeid : function(counter){
        console.log(counter);
        console.log("Employee Name: "+ this.fullname)
        id++;
    },
    fullname : "Safi Walid",
    department : "adminstration",
    level : "Mid-Senior",
    imageURl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99nqGQ5PzIigScbicjjCLU69Lvh_xKrxGlw&usqp=CAU",
    randomSalary : function (rank) {
        let min =0;
        let max =0;
   
    if (rank == "Junior") {
        min = 500;
        max = 1000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
       return randomSalary
    } else if (rank == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
     return randomSalary
    } else if (rank == "Senior") {
        min = 1500;
        max = 2000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary
    }

        let netIncome = math.floor(randomSalary*0.925);

<<<<<<< HEAD
        console.log("Employee salary: " + netIncome);
=======
        return netIncome
>>>>>>> 41d7cd2 (editedd)
    
}
}
const emp5 = {
    exmployeeid : function(counter){
        console.log(counter);
        console.log("Employee Name: "+ this.fullname)
        id++;
    },
    fullname : "Omar Zaid",
    department : "development",
    level : "Senior",
    imageURl :"https://images.squarespace-cdn.com/content/v1/61424eefdf8fd3232cffe428/1634751475745-81K7EWWJUUW5CNR0TWOS/MB.jpg",
    randomSalary : function (rank) {
        let min =0;
        let max =0;
   
    if (rank == "Junior") {
        min = 500;
        max = 1000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
       return randomSalary
    } else if (rank == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
     return randomSalary
    } else if (rank == "Senior") {
        min = 1500;
        max = 2000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary
    }

        let netIncome = math.floor(randomSalary*0.925);
<<<<<<< HEAD

        console.log("Employee salary: " + netIncome);
=======
return netIncome  
       
>>>>>>> 41d7cd2 (editedd)
    }
}


const emp6 = {
    exmployeeid : function(counter){
        console.log(counter);
        console.log("Employee Name: "+ this.fullname)
        id++;
    },
    fullname : "Rana Saleh",
    department : "development",
    level : "Junior",
    imageURl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPbbcPhM7EU0cqsaq2Phi4VLPun48JC9AKw&usqp=CAU",
    randomSalary : function (rank) {
        let min =0;
        let max =0;
   
    if (rank == "Junior") {
        min = 500;
        max = 1000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
       return randomSalary
    } else if (rank == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
     return randomSalary
    } else if (rank == "Senior") {
        min = 1500;
        max = 2000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary
    }

        let netIncome = math.floor(randomSalary*0.925);

<<<<<<< HEAD
        console.log("Employee salary: " + netIncome);
=======
        return netIncome
>>>>>>> 41d7cd2 (editedd)
    } 
}

const emp7 ={
    exmployeeid :function(counter){
        id++;
        console.log(counter);
        console.log("Employee Name: "+ this.fullname)
    },
    fullname : "Hadi Ahmad",
    department : "finance",
    level : "Mid-Senior",
    imageURl :"https://www.thecontactcompany.co.uk/wp-content/uploads/2021/12/IMG_1787.jpg",
    randomSalary : function (rank) {
        let min =0;
        let max =0;
   
    if (rank == "Junior") {
        min = 500;
        max = 1000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
       return randomSalary
    } else if (rank == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
     return randomSalary
    } else if (rank == "Senior") {
        min = 1500;
        max = 2000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary
    }

        let netIncome = math.floor(randomSalary*0.925);
<<<<<<< HEAD

        console.log("Employee salary: " + netIncome);
=======
        return netIncome;
>>>>>>> 41d7cd2 (editedd)
    } 
}




console.log(emp1.exmployeeid(id))
<<<<<<< HEAD
console.log (emp1.randomSalary("Senior"))

console.log(emp2.exmployeeid(id))
console.log (emp2.randomSalary("Senior"))

console.log(emp3.exmployeeid(id))
console.log (emp3.randomSalary("Senior"))

console.log(emp4.exmployeeid(id))
console.log (emp4.randomSalary("Senior"))

console.log(emp5.exmployeeid(id))
console.log (emp5.randomSalary("Senior"))

console.log(emp6.exmployeeid(id))
console.log (emp6.randomSalary("Senior"))

console.log(emp7.exmployeeid(id))
console.log (emp7.randomSalary("Senior"))
=======
console.log ("Employee Salary :"+emp1.randomSalary("Senior"))

console.log(emp2.exmployeeid(id))
console.log ("Employee Salary :"+emp2.randomSalary("Senior"))

console.log(emp3.exmployeeid(id))
console.log ("Employee Salary :"+emp3.randomSalary("Senior"))

console.log(emp4.exmployeeid(id))
console.log ("Employee Salary :"+emp4.randomSalary("Senior"))

console.log(emp5.exmployeeid(id))
console.log ("Employee Salary :"+emp5.randomSalary("Senior"))

console.log(emp6.exmployeeid(id))
console.log ("Employee Salary :"+emp6.randomSalary("Senior"))

console.log(emp7.exmployeeid(id))
console.log ("Employee Salary :"+emp7.randomSalary("Senior"))
>>>>>>> 41d7cd2 (editedd)
