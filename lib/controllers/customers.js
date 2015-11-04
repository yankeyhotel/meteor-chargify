Chargify.prototype.listCustomers = function(callback) {
  var request = "/customers";
  this.get(request, callback);
};

Chargify.prototype.showCustomer = function(id, callback) {
  var request = "/customers/" + id;
  this.get(request, callback);
};

Chargify.prototype.showCustomerReference = function(id, callback) {
  var request = "/customers/" + id;
  this.get(request, callback);
};

Chargify.prototype.createCustomer = function(id, callback) {
  var request = "/customers";
  this.post(request, callback);
};

Chargify.prototype.updateCustomer = function(id, callback) {
  var request = "/customers/" + id;
  this.put(request, callback);
};

Chargify.prototype.deleteCustomer = function(id, callback) {
  var request = "/customers/" + id;
  this.delete(request, callback);
};
