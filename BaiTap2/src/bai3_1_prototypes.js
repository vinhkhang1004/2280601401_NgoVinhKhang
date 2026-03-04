/**
 * Constructor Function cho Person.
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function() {
  return `Xin chào, tôi là ${this.name}, ${this.age} tuổi`;
};

Person.prototype.haveBirthday = function() {
  this.age += 1;
};

/**
 * Constructor Function cho Student kế thừa từ Person.
 */
function Student(name, age, school) {
  // Gọi constructor của cha
  Person.call(this, name, age);
  this.school = school;
}

// Thiết lập kế thừa prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  return `${this.name} đang học tại ${this.school}`;
};

module.exports = { Person, Student };