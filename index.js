class Employee {
    constructor(employeeId , name, department){
        this.employeeId = employeeId;
        this.name = name;
        this.department = department;

    }

showDetails(){
    document.getElementById("p1").innerHTML =`
    EmployeeId = ${this.employeeId} <br>
    name = ${this.name}<br>
    department = ${this.department}<br>
    `
}
}
const employee1 = new Employee(121, "Aditya","Engineering");
employee1.showDetails();


//--------------------Cricle methde---------------------------//


         
 
class Shape {
 constructor(){
    this.area = 0;

 }
 showarea(){
    return this.area;
 }

}
class Cricle extends Shape {
    constructor (radius){
        super();
        this.radius = radius;
    }
    calculatearea(){
        this.area = 3.14 * 
        this.radius * this.radius;

    }
}

const myCircle = new Cricle(5);




myCircle.calculatearea();
document.getElementById("p4").innerHTML = "Area ="+ myCircle.showarea();


//-------------Book-------------------//

class Book{
    title ;
    author;
    year_pulished;

    constructor(title,author, year_pulished){
         this.title = title;
         this.author = author;
         this.year_pulished;

    }
    showDetails(){
        document.getElementById("p2").innerHTML +=`
        title = ${this.title}<br>
        author = ${this.author}<br>
        year =  ${this.year_pulished}<br>
        `
    }
}
const myBook = new Book("Shrimant Yogi", "Ranjit Desai", '1962');
myBook.showDetails();




//--------Student calasses-------------//

class Person {
    constructor( name, age){
        this.name = name;
        this.age = age;

    }
    showDetails(){
        document.getElementById("p5").innerHTML +=`
         Name = ${this.name} <br>
         Age = ${this.age}<br>
         `
    }
}
//Derived class
class Student extends Person{
    constructor(name, age ,StudentId){
        super(name,age);
        this.StudentId = StudentId;

    }
    showDetails(){
        document.getElementById("p5").innerHTML +=`
         Name = ${this.name}<br>
         Age = ${this.age}<br>
         StudentId = ${this.StudentId}<br>
         `
    }
}
const student = new Student('sonal kokate',20, 's1234');
student.showDetails();


//------------------Employee and manager classes-------------------------//


class Employee1 {
    constructor( name, employeeNumber){
        this.name = name;
        this.employeeNumber = employeeNumber;
    }
    showDetails(){
        document.getElementById("p3").innerHTML +=`
        Name = ${this.name}<br>
        Employee = ${this.employeeNumber}<br>
        `
    }
}
  //Derived class 
  class Manager extends Employee1{
    constructor(name, employeeNumber, department){
    super(name, employeeNumber);
    this.department = department;
    }

    showDetails(){
        document.getElementById("p3").innerHTML +=`
        Name = ${this.name}<br>
        Employee = ${this.employeeNumber}<br>
        department = ${this.department}<br>
        `
    }
  }

  const manager = new  Manager('Aditya', 'S1234','Sales');
manager.showDetails();


//------------------------Rectangle-------------------------------------//

class Rectangle {
    length;
    width;
    area;

    constructor ( length, width, area){
        this.length = length;
        this.width = width;
        this.area = 0;

    }

    calculatearea(){
        this.area = this.length * this.width;
    }

    showDetails(){
        document.getElementById("p6").innerHTML += `
        Area of rectangle = ${this.area}<Br>`        
    }
}

const Recta = new Rectangle(30,20);
Recta.calculatearea();
Recta.showDetails();