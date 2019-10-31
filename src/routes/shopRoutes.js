const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./adminRoutes');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    console.log('data', products);
    res.render('shop', { prods: products, docTitle: 'Shop' });
});

module.exports = router;