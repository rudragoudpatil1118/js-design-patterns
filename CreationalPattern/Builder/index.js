var PersonBuilder = require('./PersonBuilder.')

// Employees
var sue = new PersonBuilder('Sue').makeEmployee().build();
var bill = new PersonBuilder('Bill').build();
var phil = new PersonBuilder('Phil').build();

// Shoppers
var charles = new PersonBuilder('Charles' ).withShoppingList(['jeans', 'sunglasses']).build();
var tabbitha = new PersonBuilder('Tabbitha').build();

console.log(sue, bill, phil, charles, tabbitha);
