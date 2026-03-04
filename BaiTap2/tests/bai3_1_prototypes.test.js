const { Person, Student } = require('../src/bai3_1_prototypes');

describe('Bài 3.1: Prototypes', () => {
  test('Person methods', () => {
    const person = new Person('Nam', 25);
    expect(person.introduce()).toBe('Xin chào, tôi là Nam, 25 tuổi');
    
    person.haveBirthday();
    expect(person.age).toBe(26);
  });

  test('Student kế thừa từ Person', () => {
    const student = new Student('Quang', 20, 'HUTECH');
    
   
    expect(student.study()).toBe('Quang đang học tại HUTECH');
    
  
    expect(student.introduce()).toBe('Xin chào, tôi là Quang, 20 tuổi');
    
   
    expect(student).toBeInstanceOf(Student);
    expect(student).toBeInstanceOf(Person);
  });
});