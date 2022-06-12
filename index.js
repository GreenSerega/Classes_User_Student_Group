"use strict";

class User {
  constructor(name, surname ) {
    this.name = name;
    this.surname = surname;
  }
  getFullname() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  get year() {
    return this._year;
  }
  set year(year) {
    if (year > new Date().getFullYear()) {
      throw new RangeError("enter the correct year");
    }
    if (year < new Date().getFullYear() - 5) {
      throw new RangeError("Year value must not exceed 5 years.");
    }
    this._year = year;
  }
  getCourse() {
    return new Date().getFullYear() - this.year;
  }
  UsersInfo() {
    return `${this.surname} ${this.surname.charAt(0)}`;
  }
}

class Group {
  constructor(name, students) {
    this.name = name;
    this.students = students;
  }
  showStudents() {
    if (this.students.length > 0) {
      return this.students.map((students) => students.UsersInfo());
    }
    throw new Error("in group mast be students");
  }
}
const user = new User("Ivan", "Ivanov");
const student = new Student("Ivan", "Ivanov", 2019);
const group = new Group("New Group", [
  new Student("Ivan", "Ivanovich", 2018),
  new Student("Ivan", "Ivanovichech", 2019),
  new Student("Ivan", "Ivan", 2020),
  new Student("Ivan", "Ivanov", 2021),
  new Student("Ivan", "Ivanovi", 2017),
  new Student("Ivan", "Iva", 2016),
]);
console.log(user.getFullName());
console.log(student.getCourse());
console.log(group.showStudents());