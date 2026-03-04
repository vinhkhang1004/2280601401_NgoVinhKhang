function* fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

async function* asyncGenerator(items) {
  for (const item of items) {
    await new Promise(r => setTimeout(r, 10));
    yield item;
  }
}

function* paginate(items, pageSize) {
  for (let i = 0; i < items.length; i += pageSize) {
    yield items.slice(i, i + pageSize);
  }
}

module.exports = { fibonacci, asyncGenerator, paginate };