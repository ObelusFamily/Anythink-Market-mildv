var router = require('express').Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// return a list of products
router.get('/', function(req, res, next) {
  Item.find().distinct('productList').then(function(products){
    return res.json({products: products});
  }).catch(next);
});

module.exports = router;
