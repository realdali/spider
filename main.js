var fs = require('fs');
var config = require('./config');
var Shop = require('./shop');
var City = require('./city');

/**
 * spider Class
 */
var Spider = function(){
	this.config = config;
	this.shop = new Shop(this.config);
}

Spider.prototype.init = function(){
	this.shop.process();
}

var spdier = new Spider();
spdier.init();