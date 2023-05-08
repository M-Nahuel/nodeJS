function orderProduct(product) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering: ${product} from Pizzas!`);
    setTimeout(() => {
      if(product === 'pepperoni') {
        resolve('Ordering a pepperoni pizza!');
      } else {
        reject('This product is not available at this moment!');
      }
    }, 2000);
  });
};

//Without using reject
function processingOrder(order) {
  return new Promise(resolve => {
    console.log('Processing your order.');
    console.log(`The result of the order was "${order}"`);
    setTimeout(() => {
      resolve('Thanks for your order. Enjoy!');
    }, 4000);
  });
};
/*
orderProduct('pepperoni')
.then(response => {
  console.log('Response received.');
  console.log(response);
  return processingOrder(response);
})
.then(processedResponse => {
  console.log(processedResponse);
})
.catch(error => {
  console.log(error);
});
*/

//Async-Await:
async function placeOrder(product) {
  try {
  const response = await orderProduct(product);
  console.log('Response received.');
  console.log(response);
  const processedResponse = await processingOrder(response);
  console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
};

placeOrder('pepperoni');