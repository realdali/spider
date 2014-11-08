var fs = require('fs');
var async = require('async');

var File = function(){
	this.fileList = [];
};

/**
 * init File Class
 * @return null
 */
File.prototype.init = function(){
	//this.setFileList();
};

/**
 * get file names  from  dir and append it to list
 * @param  {string}   dir
 * @param  {Function} callback
 * @return {Function} use callback function
 */
File.prototype.appendFileToList = function(dir, callback){
	var self = this;
	var path = dir;
	fs.readdir(path, function(error, files){
		if (error) {
			console.log(error);
		};
		self.fileList = self.fileList.concat(files);
		callback(null, '');
	});
}

/**
 * get file names from dir
 * @param  {string}   dir
 * @param  {Function} callback
 * @return {Function} use callback function
 */
File.prototype.getFileList = function(dir, callback){
	var path = dir;
	fs.readdir(path, function(error, files){
		if (error) {
			console.log(error);
		};
		callback(error, files);
	});
}


/**
 * get file names from multi directories
 * @param  {array}   dirs
 * @param  {Function} callback
 * @return {Function} use callback function
 */
File.prototype.getFileListFromMultiDir = function(dirs, callback){
	var self = this;
	async.each(dirs, function(dir, cb){
		self.appendFileToList(dir, cb);
	}, function(error, results){
		if (error) {
			console.log(error);
		};
		callback(error, self.fileList);
	});
}

/**
 * read file by filename
 * @param  {string}   name
 * @param  {Function} callback
 * @return {Function} use callback function
 */
File.prototype.readFileByName = function(name, callback){
	var filename = name;
	fs.readFile(filename, {encoding:'utf8',flag:'r'}, function(error, data){
		if (error) {
			console.log(error);
		};
		callback(error, data);
	})
};

/**
 * read file by path and name
 * @param  {string}   dir
 * @param  {string}   name
 * @param  {Function} callback
 * @return {Function} use callback function
 */
File.prototype.readFileByPathAndName = function(dir, name, callback){
	var filename = path + name;
	fs.readFile(filename, {encoding:'utf8',flag:'r'}, function(error, data){
		if (error) {
			console.log(error);
		};
		callback(error, data);
	});

}

/**
 * write file
 * @param  {string}   dir
 * @param  {string}   name
 * @param  {string}   data
 * @param  {Function} callback
 * @return {Function} use callback function
 */
File.prototype.writeFile = function(dir, name, data, callback){
	var filename = dir + name;
	fs.writeFile(filename, data, {encoding:'utf8',flag:'r'}, function(error){
		if (error) {
			console.log(error);
		};
		callback(error);
	});
}

exports = module.exports = File;

