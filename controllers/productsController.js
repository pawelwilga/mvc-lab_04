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
const getProductView = (request, response) => {
    const productName = request.params.name;
    const product = Product.findByName(productName);

    if (!product) {
        return response.status(STATUS_CODE.NOT_FOUND);
    }

    response.render("product.ejs", {
        headTitle: `Product - ${product.name}`,
        path: "/products",
        menuLinks: MENU_LINKS,
        activeLinkPath: "/products",
        product: product,
    });
};

const deleteProduct = (request, response) => {
    const productName = request.params.name;
    prod.deleteByName(productName);
    response.status(STATUS_CODE.OK).json({ success: true });
};

module.exports = {
    getProductsView,
    getAddProductView,
    addNewProduct,
    getNewProductView,
    getProductView,
    deleteProduct
};