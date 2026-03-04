const getProductNames = (products) => products.map(p => p.name);

const getInStockProducts = (products) => products.filter(p => p.inStock);

const getTotalValue = (products) => products.reduce((total, p) => total + p.price, 0);

const groupByCategory = (products) => {
  return products.reduce((acc, p) => {
    const key = p.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(p);
    return acc;
  }, {});
};

const sortByPrice = (products, order = 'asc') => {
  return [...products].sort((a, b) => {
    return order === 'asc' ? a.price - b.price : b.price - a.price;
  });
};

const applyDiscount = (products, percent) => {
  return products.map(p => ({
    ...p,
    price: p.price * (1 - percent / 100)
  }));
};

module.exports = {
  getProductNames,
  getInStockProducts,
  getTotalValue,
  groupByCategory,
  sortByPrice,
  applyDiscount
};