Package.describe({
  name: 'yankeyhotel:meteor-chargify',
  version: '0.0.1',
  summary: 'Easy integration with Chargify for adding recurring payments to your application.',
  git: 'https://github.com/yankeyhotel/meteor-chargify',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // Dependencies
  api.use(['ecmascript', 'http']);

  // Package Files
  // Loading on the client only

  // Loading on the server only
  api.addFiles('lib/controllers/chargify.js', 'server');
  api.addFiles([
    'lib/controllers/subscriptions.js',
    'lib/controllers/customers.js'
  ], 'server');
  api.export('Chargify', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('yankeyhotel:meteor-chargify');
  api.addFiles('tests/chargify-tests.js');
});
