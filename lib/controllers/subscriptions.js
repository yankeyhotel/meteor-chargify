Chargify.prototype.subscriptions = function(callback) {
  var request = "/subscriptions";
  this.get(request, callback);
};

Chargify.prototype.getSubscription = function(id, callback) {
  var request = "/subscriptions/" + id;
  this.get(request, callback);
};

Chargify.prototype.createSubscription = function(id, callback) {
  var request = "/subscription";
  this.post(request, callback);
};
