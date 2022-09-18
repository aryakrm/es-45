function Smartphobne(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

let samsung = new Smartphobne("Samsung", "Galaxy S22", 1800);
let huawei = new Smartphobne("Huawei", "Mate lite 20", 800);

console.log(samsung);
console.log(huawei);
