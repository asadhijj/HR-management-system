var id = 1000;

function Employee(fullNameValue, departmentValue, levelValue, imageValue) {
  this.id = id++;
  this.fullName = fullNameValue;
  this.department = departmentValue;
  this.level = levelValue;
  this.image = imageValue;
  this.salary = function (level) {
    let min = 0;
    let max = 0;

    if (level == "Junior") {
      min = 500;
      max = 1000;
      let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
      return randomSalary;
    } else if (level == "Mid-Senior") {
      min = 1000;
      max = 1500;
      let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
      return randomSalary;
    } else if (level == "Senior") {
      min = 1500;
      max = 2000;
      let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
      return randomSalary;
    }

    let netIncome = math.floor(randomSalary * 0.925);

    return netIncome;
  };
}

Employee.prototype.renderingInfo = function () {
  //document.write(`<p> Employee name: ${this.fullName} <br> Department:  ${this.department} <br> Employee salary: ${this.salary(this.level)} <br> </p><br>`)};

  // let main= document.getElementsByTagName('main')
  // let container= document.createElement('div');
  // container.className='container';
  // main[0].appendChild(container);
  // console.log(allEmployees);

  const containerCard = document.querySelector(".container");

  let cont = document.createElement("div");
  let cards = document.createElement("img");
  cards.src = `${this.image}`;
  cards.alt = "employee pfp";
  cont.appendChild(cards);
  let para = document.createElement("p");
  para.textContent = `Employee Name: ${this.fullName} -ID ${this.id}`;
  cont.appendChild(para);
  let dep = document.createElement("p");
  dep.textContent = `Department: ${this.department} - Level: ${this.level}`;
  para.appendChild(dep);
  let income = document.createElement("p");
  income.textContent = `${this.salary(this.level)}`;
  dep.appendChild(income);
  cont.classList.add("containerCard");
  containerCard.appendChild(cont);
};

const employees = [];
employees.push(
  new Employee("Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.jpg")
);
employees.push(
  new Employee("Lana Ali", "Finance", "Senior", "./assets/Lana.jpg")
);
employees.push(
  new Employee("Tamara Ayoub", "Marketing", "Mid-Senior", "./assets/Tamara.jpg")
);
employees.push(
  new Employee("Safi Walid", "Administration", "Senior", "./assets/Safi.jpg")
);
employees.push(
  new Employee("Omar Zaid", "Development", "Junior", "./assets/Omar.jpg")
);
employees.push(
  new Employee("Rana Saleh", "Development", "Mid-Senior", "./assets/Rana.jpg")
);
employees.push(
  new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./assets/Hadi.jpg")
);

for (let i = 0; i < employees.length; i++) employees[i].renderingInfo();
