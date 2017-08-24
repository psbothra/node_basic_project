var productService = require('../services/product-service');
var _ = require('underscore');
var request = require('request').defaults({strictSSL: false});
var ejs = require('ejs');

module.exports = {
	get : function(req, res){

		var url = 'http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1';
		request(url, function (error, response, body) {
		//	console.log('body:', body); // Print the HTML for the Google homepage. 
			var resp = JSON.parse(body);
			res.render('index',{productLists: resp.productList, productList : {}}) 
			
		});
	}
};