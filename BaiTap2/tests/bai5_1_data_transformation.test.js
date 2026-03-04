const {
  getProductNames,
  getInStockProducts,
  getTotalValue,
  groupByCategory,
  sortByPrice,
  applyDiscount
} = require('../src/bai5_1_data_transformation');

const products = [
  { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', inStock: true },
  { id: 2, name: 'Phone', price: 500, category: 'Electronics', inStock: false },
  { id: 3, name: 'Shirt', price: 50, category: 'Clothing', inStock: true },
];

describe('Bài 5.1: Data Transformation', () => {
  test('groupByCategory', () => {
    const groups = groupByCategory(products);
    expect(groups.Electronics).toHaveLength(2);
    expect(groups.Clothing).toHaveLength(1);
  });

  test('getTotalValue', () => {
    expect(getTotalValue(products)).toBe(1550);
  });

  test('sortByPrice desc', () => {
    const sorted = sortByPrice(products, 'desc');
    expect(sorted[0].price).toBe(1000);
    expect(sorted[2].price).toBe(50);
  });

  test('applyDiscount không làm thay đổi mảng gốc', () => {
    const discounted = applyDiscount(products, 10);
    expect(discounted[0].price).toBe(900);
    expect(products[0].price).toBe(1000);
  });
});