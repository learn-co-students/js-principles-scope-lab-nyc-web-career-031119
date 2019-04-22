// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'test';
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(text) {
  bestCustomer = text;
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 1;
}
