var Flour_costPerKg=100;
var Corn_costPerKg=200;
var Wheat_costPerKg=300;
var Flour_quantity=4;
var Corn_quantity=5;
var Wheat_quantity=6;
var Flour_Price = Flour_costPerKg * Flour_quantity;
var Wheat_price = Wheat_costPerKg * Wheat_quantity;
var Corn_price = Corn_costPerKg * Corn_quantity;
console.log("Total Amount="+ (Flour_Price+Wheat_price+Corn_price) );