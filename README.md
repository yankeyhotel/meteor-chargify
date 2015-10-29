# Meteor Chargify
Easy integration with [Chargify](http://chargify.com) for adding recurring payments to your application.

## Install
Using Meteor's packaging system:

`$ meteor add yankeyhotel:meteor-chargify`

## Usage

I recommend using a settings.json file and adding your Chargify subdomain and API key there.

```JSON
{
  "private": {
    "chargify": {
      "subdomain": "...",
      "api_key": "..."
    }
  }
}
```

You can then set up Chargify like this...

```JavaScript
var subdomain = Meteor.settings.private.chargify.subdomain,
    api_key   = Meteor.settings.private.chargify.api_key,
    chargify  = Chargify(subdomain, api_key);

// Use a Future
var Future = Npm.require('fibers/future');
var chargify_subscriptions = new Future();

chargify.get("/subscriptions", function(error, result, data) {
  if (error) {
    chargify_subscriptions.return(error);
  } else {
    chargify_subscriptions.return(data);
  }
});

chargify_data = chargify_subscriptions.wait();
```
