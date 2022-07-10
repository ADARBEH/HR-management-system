'use strict';

const info_employee = []; // make array to see all name of employee and his salary
const menu = document.getElementById("menu")

function Employee(employee_ID,full_Name,department,level,imageur) {

  this.employee_ID=employee_ID;
  this.full_Name=full_Name;
  this.department=department;
  this.level=level;
  this.imageur=imageur;

  this.salary=this.salary();

  info_employee.push(this);
}

Employee.prototype.salary = function(){
 if (this.level=="Senior"){
 return Math.floor(Math.random()*(2000-1500))+1500;}

 else if (this.level=="Mid-senior"){
 return Math.floor(Math.random()*(1500-1000))+1000;}

 else if (this.level=="Junior"){
 return Math.floor(Math.random()*(1000-500))+500;}

}
const ghazi = new Employee ("1000","Ghazi Samer","Administration","Senior","assets/Ghazi.jpg");
const lana = new Employee ("1001","Lana Ali","Finance","Senior","assets/Lana.jpg");
const tamara = new Employee ("1002","Tamara Ayoub","Marketing","Senior","assets/Tamara.jpg");
const safi = new Employee ("1003","Safi Walid","Administration","Mid-senior","assets/Safi.jpg");
const omar = new Employee ("1004","Omar Zaid","Development","Senior","assets/Omar.jpg");
const rana = new Employee ("1005","Rana Saleh","Development","Junior","assets/Rana.jpg");
const hadi = new Employee ("1006","Hadi Ahmad","Finance","Mid-senior","assets/Hadi.jpg");


Employee.prototype.form_employee = function () {


  const formel = document.createElement("form");
  
  const img = document.createElement("img")
  img.src = this.imageur;
  img.setAttribute('id', 'img_id');
  formel.appendChild(img);


  const pel = document.createElement("p");
  pel.setAttribute('id', 'p_id');
  pel.textContent = `Name: ${this.full_Name} : -ID:${this.employee_ID}  Deperatment: ${this.department} - leve: ${this.level} ${this.salary}`;
  formel.appendChild(pel)

  menu.appendChild(formel);
}

for (let i=0; i<info_employee.length; i++){
  info_employee[i].form_employee();
}
