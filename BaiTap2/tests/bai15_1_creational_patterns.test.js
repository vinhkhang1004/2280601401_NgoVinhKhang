const { DatabaseConnection, UserFactory, QueryBuilder } = require('../src/bai15_1_creational_patterns');

describe('Bài 15.1: Creational', () => {
  test('Singleton', () => {
    const db1 = new DatabaseConnection();
    const db2 = new DatabaseConnection();
    expect(db1).toBe(db2);
  });
  
  test('Builder', () => {
    const q = new QueryBuilder().select('*').from('users').build();
    expect(q).toBe('SELECT * FROM users');
  });
});