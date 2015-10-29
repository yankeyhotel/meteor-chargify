
Chargify = function( options ) {

    if (typeof options === 'string') {
        options = {
            subdomain: arguments[0],
            api_key: arguments[1]
        };
    }

    if (!(this instanceof Chargify)) {
        return new Chargify(options);
    }

    this.protocol = 'https://';
    this.host = options.subdomain + '.chargify.com';
    this.api_key = options.api_key;

};


Chargify.prototype.http = function( method, request, callback ) {
  uri = this.protocol + this.host + request;
  options = {
    'headers': {
      'accept': 'application/json'
    },
    'auth': this.api_key + ':x'
  };

  HTTP.call(method, uri, options, function( error, result ) {
    var data = {};
    if (error)  return callback(error);
    if (result.headers['content-type'].indexOf('application/json') !== -1 && result.data !== null) {
      data = result.data;
    }
    callback(error, result, data);
  });

};

Chargify.prototype.get = function(request, callback) {
  this.http('GET', request, callback);
};

Chargify.prototype.post = function(request, callback) {
  this.http('POST', request, callback);
};

Chargify.prototype.put = function(request, callback) {
  this.http('PUT', request, callback);
};

Chargify.prototype.head = function(request, callback) {
  this.http('HEAD', request, callback);
};

Chargify.prototype.del = function(request, callback) {
  this.http('DEL', request, callback);
};


Chargify.prototype.subscriptions = function(callback) {
  var request = "/subscriptions";
  this.get(request, callback);
};
