Package.describe({
  name: 'yankeyhotel:meteor-chargify',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Easy integration with Chargify for adding recurring payments to your application.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yankeyhotel/meteor-chargify',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('http');
  api.addFiles('chargify.js', 'server');
  api.export('Chargify', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('yankeyhotel:chargify');
  api.addFiles('chargify-tests.js');
});
