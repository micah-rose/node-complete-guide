const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();
const isAuth = require("../middleware/is-auth");
const { body } = require("express-validator/check");

router.get(
  "/add-product", isAuth, adminController.getAddProduct);
router.get("/products", isAuth, adminController.getProducts);

router.post("/add-product",   
[
    body("title")
        .isAlphanumeric()
        .isLength({ min: 3})
        .trim(), 
    body("imageUrl")
        .isURL(), 
    body("price")
        .isFloat(), 
    body("description")
        .isLength({ min: 5, max: 250 })
        .trim()
],
isAuth, adminController.postAddProduct);
router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post("/edit-product", 
[
    body("title")
        .isAlphanumeric()
        .isLength({ min: 3})
        .trim(), 
    body("imageUrl")
        .isURL(), 
    body("price")
        .isFloat(), 
    body("description")
        .isLength({ min: 5, max: 250 })
        .trim()
],
isAuth, adminController.postEditProduct);
router.post("/delete-product", isAuth, adminController.postDeleteProduct);

module.exports = router;
