const {
  getExpensiveInStockElectronics,
  calculateCategoryStats
} = require('../src/bai5_2_chaining_methods');

const products = [
  { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', inStock: true },
  { id: 2, name: 'Phone', price: 500, category: 'Electronics', inStock: false },
  { id: 3, name: 'TV', price: 1200, category: 'Electronics', inStock: true },
  { id: 4, name: 'Shirt', price: 50, category: 'Clothing', inStock: true },
];

describe('Bài 5.2: Chaining Methods', () => {
  test('getExpensiveInStockElectronics', () => {
    const result = getExpensiveInStockElectronics(products);
    expect(result).toHaveLength(2); // Laptop, TV
    expect(result.find(p => p.name === 'Phone')).toBeUndefined(); 
  });

  test('calculateCategoryStats', () => {
    const stats = calculateCategoryStats(products);
    expect(stats.Electronics.count).toBe(3);
    expect(stats.Electronics.average).toBe(900); 
  });
});