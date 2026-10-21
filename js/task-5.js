// for (let i = 0; i <= 20; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 10; i >= 1; i -= 1) {
//   console.log(i);
//   if (i === 1) {
//     console.log('start');
//   }
// }

// const prices = [100, 250, 50, 400, 120];

// function sumArray(value) {
//   let sum = 0;
//   for (const price of value) {
//   }
// }

// sumArray(prices);

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const propValue = [];
//   for (const product of products) {
//     if (product[propName]) propValue.push(product[propName]);
//   }
//   console.log(propValue);
//   return propValue;
// }

// getAllPropValues('name');

function calculateTotalPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];

  for (const product of products) {
    if (product[productName]) {
      return product.price * product.quantity;
    }
  }
}

calculateTotalPrice('Radar');
