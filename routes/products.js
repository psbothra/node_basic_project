var productsController = require('../app/controllers/products-controller');

module.exports = function(router){

	router.route('/products').get(productsController.get);

};
