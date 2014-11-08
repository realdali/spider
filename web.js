var http = require('http');
var request = require('request');
var querystring = require('querystring');
var Web = function(){
};

Web.prototype.init = function(){

};

/*
 *request resource from website using get method
 *@para {host, path, callback}
 *@return callback(error, responseBody)
*/
Web.prototype.get = function(host, path, callback){
	var options = {
		host : host,
		path : path,
		headers : {
			'User-Agent' : 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.101 Safari/537.36'
		}
	};
	http.get(options, function(res){
		var data = '';
		res.setEncoding('utf8');
		res.on('data', function(chunk){
			data += chunk;
		}).on('end', function(){
			callback(null, data);
		});
	}).on('error', function(err){
		if(err){
			console.log(err);
		}
		callback(err, '');
	});
};

/*
 *request resource from website using post method
 *@para {host, path, callback}
 *@return callback(error, responseBody)
*/
Web.prototype.post = function(host, path, data, callback){
    var content = querystring.stringify(data);
	var options = {
		host : host,
		path : path,
		method : 'post',
		headers : {
            'Content-Length':content.length,
			'User-Agent' : 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.101 Safari/537.36'
		}
	};
	var req = http.request(options, function(res){
		var data = '';
		res.setEncoding('utf8');
		res.on('data', function(chunk){
			data += chunk;
		}).on('end', function(){
			callback(null, data);
		});
	}).on('error', function(err){
		if(err){
			console.log(err);
		}
		callback(err, '');
	});
	req.write(content);
	req.end();
}

exports = module.exports = Web;
