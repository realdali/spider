var fs = require('fs');
var Shop = require('./shop.js');

var City = function(config){
	this.config = config
}

City.prototype.init = function(config) {
	this.config = config
}

/**
 * setting city array
 * @param {array} cityArr  city list
 */
City.prototype._setCity = function(cityArr) {
	this.config.city = cityArr;
}

/**
 * get city list from file 
 * @param  {string}   file     [file path]
 * @param  {Function} callback [return function]
 * @return {Function}            [using callback function]
 */
City.prototype.getCityList = function(file, callback) {
	var self = this;

	fs.readFile(file, 'utf-8', function(err, data) {
		var dataArray = [];
		if (err) {
			console.log(err);
		} else {
			dataArray = self._getSequenceArray(data);
			self._setCity(dataArray);
		}
		callback(err, dataArray);
	});
}

/**
 * delete repeate city by id, return sequence json array
 * @param  {array} data  city list
 * @return {array}      sequenced city list
 */
City.prototype._getSequenceArray = function(data) {
	var dataList = data.split('\n');
	var cityArr = [];
	var preValue = 0;

	for (var i = 0, len = dataList.length - 1; i < len; i ++) {
		var city = dataList[i].split(',');
		if (city && city.length > 1) {
			if (city[1] > 0 && city[1] != preValue) {
				cityArr.push(city[1]);
				preValue = city[1];
			}
		}
	}
	return cityArr;
}

exports = module.exports = City;
