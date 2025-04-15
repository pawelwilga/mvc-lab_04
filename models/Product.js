const logger = require("../utils/logger");

class Product {
    static #products = [];
  
    constructor(name, description) {
      this.name = name;
      this.description = description;
    }
  
    static getAll() {
      return Product.#products;
    }
  
    static add(product) {
      if (product instanceof Product) {
        Product.#products.push(product);
      } else {
        logger.getErrorLog("Invalid argument type passed to add() method");
      }
    }
  
    static findByName(name) {
      return Product.#products.find(product => product.name === name);
    }
  
    static deleteByName(name) {
      const index = Product.#products.findIndex(product => product.name === name);
      if (index !== -1) {
        Product.#products.splice(index, 1);
      }
    }
  
    static getLast() {
      return Product.#products.length > 0 ? Product.#products[Product.#products.length - 1] : undefined;
    }
  }

  module.exports = Product;