var http = require('http');
var fs = require('fs');
var http = require('http');
var async = require('async');
var cheerio = require('cheerio');
var City = require('./city');

/**
 * shop class
 * @param {json} config [config information]
 */
var Shop = function(config) {
	this.config = config;
	this.config.city = [];
	this.config.runtime = {
		shopList : [], //shop urls of current page 
		cityIndex : 0,
		pageIndex : 1, 
		shopIndex : 0, //shop index num in html
		shopMax : 0, //shop max account in html
		pageMax : 50  //page sum
	};
	this.city = new City(config);
}

Shop.prototype.init = function() {

};

Shop.prototype._setCity = function(cityArray) {
	this.config.city = cityArray;
}

Shop.prototype.process = function() {

}
