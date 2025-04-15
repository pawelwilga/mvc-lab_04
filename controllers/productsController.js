const logger = require('../utils/logger');
const prod = require('../models/Product');
const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

const getProductsView = (_request, response) => {
    response.render("products.ejs", {
      headTitle: "Shop - Products",
      path: "/",
      menuLinks: MENU_LINKS,
      activeLinkPath: "/products",
      products: prod.getAll()
    });
  };

const getAddProductView = (_request, response) => {
    response.render("add-product.ejs", {
      headTitle: "Shop - Add product",
      path: "/add",
      menuLinks: MENU_LINKS,
      activeLinkPath: "/products/add",
    });
};

const addNewProduct = (request, response) => {
    const { name, description } = request.body;
    prod.add(new prod(name, description));
    response.status(STATUS_CODE.FOUND).redirect("/products/new");
};

const getNewProductView = (_request, response) => {
    response.render("new-product.ejs", {
      headTitle: "Shop - New product",
      path: "/new",
      activeLinkPath: "/products/new",
      menuLinks: MENU_LINKS,
      newestProduct: prod.getLast(),
    });
  };

module.exports = {
    getProductsView,
    getAddProductView,
    addNewProduct,
    getNewProductView
};