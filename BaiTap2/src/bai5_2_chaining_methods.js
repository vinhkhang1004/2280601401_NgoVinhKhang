const getExpensiveInStockElectronics = (products) => products
  .filter(p => p.category === 'Electronics' && p.inStock && p.price > 200);

const getCheapestProductPerCategory = (products) => {
  return products.reduce((acc, p) => {
    if (!acc[p.category] || p.price < acc[p.category].price) {
      acc[p.category] = p;
    }
    return acc;
  }, {});
};

const calculateCategoryStats = (products) => {
  const groups = products.reduce((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p.price);
    return acc;
  }, {});

  return Object.keys(groups).reduce((acc, cat) => {
    const prices = groups[cat];
    const total = prices.reduce((a, b) => a + b, 0);
    acc[cat] = {
      count: prices.length,
      total,
      average: total / prices.length
    };
    return acc;
  }, {});
};

module.exports = {
  getExpensiveInStockElectronics,
  getCheapestProductPerCategory,
  calculateCategoryStats
};