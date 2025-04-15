const express = require("express");
const pc = require('../controllers/productsController');
const productsSlice = require("../store/products");

const router = express.Router();

router.get("/", pc.getProductsView);

router.get("/add", pc.getAddProductView);

router.post("/add", pc.addNewProduct);

router.get("/new", pc.getNewProductView);

module.exports = router;
