/* this module and script helps to generate fake data to seed this script randomly */
const faker = require("faker");
faker.seed(100);

const products = [];
const orders = [];
var categories = ["Watersports", "Soccer", "Chess", "Running"];

for (let i = 1; i <= 503; i++) {
  var category = faker.helpers.randomize(categories);
  products.push({
    id: i,
    name: faker.commerce.productName(),
    category: category,
    description: `${category}: ${faker.lorem.sentence(3)}`,
    price: Number(faker.commerce.price())
  });
}

for (let i = 0; i <= 103; i++) {
  var fname = faker.name.firstName();
  var sname = faker.name.lastName();
  var order = {
    id: i,
    name: `${fname} ${sname}`,
    email: faker.internet.email(fname, sname),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
    shipped: faker.random.boolean(),
    products: []
  };
  var productCount = faker.random.number({ min: 1, max: 7 });
  var product_ids = [];
  while (product_ids.length < productCount) {
    var candidateId = faker.random.number({ min: 1, max: products.length });
    if (product_ids.indexOf(candidateId) === -1) {
      product_ids.push(candidateId);
    }
  }
  for (let k = 0; k < productCount; ++k) {
    order.products.push({
      quantity: faker.random.number({ min: 1, max: 6 }),
      product_id: product_ids[k]
    });
  }
  orders.push(order);
}
//console.log(orders)
module.exports = function() {
  return {
    categories,
    products,
    orders
  };
};
