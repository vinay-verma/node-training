const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product' });
});

router.post('/add-product', (req, res, next) => {
    const body = req.body;
    products.push({
        title: body.title,
    });
    console.log('Body', body);
    res.redirect("/");
});

exports.routes = router;
exports.products = products;