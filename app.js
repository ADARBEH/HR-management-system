
'use strict';

const name_salary = []; // make array to see all name of employee and his salary

function Employee(employee_ID,full_Name,department,level,imageur) {

  this.employee_ID=employee_ID;
  this.full_Name=full_Name;
  this.department=department;
  this.level=level;
  this.imageur=imageur;

  this.salary=this.salary();

  name_salary.push(this);
}

Employee.prototype.salary = function(){
 if (this.level=="Senior"){
 return Math.floor(Math.random()*(2000-1500))+1500;}

 else if (this.level=="Mid-senior"){
 return Math.floor(Math.random()*(1500-1000))+1000;}

 else if (this.level=="Junior"){
 return Math.floor(Math.random()*(1000-500))+500;}

}
const ghazi = new Employee ("1000","Ghazi Samer","Administration","Senior");
const lana = new Employee ("1001","Lana Ali","Finance","Senior");
const tamara = new Employee ("1002","Tamara Ayoub","Marketing","Senior");
const safi = new Employee ("1003","Safi Walid","Administration","Mid-senior");
const omar = new Employee ("1004","Omar Zaid","Development","Senior");
const rana = new Employee ("1005","Rana Saleh","Development","Junior");
const hadi = new Employee ("1006","Hadi Ahmad","Finance","Mid-senior");


Employee.prototype.print_name_salary = function (){

    document.write(`<P>${this.full_Name} : ${this.salary} JD </P>`);
}

for ( let i=0; i<name_salary.length; i++){ //this loop for print all name and salary by useing array <automatic>
    name_salary[i].print_name_salary();
}

