Package.describe({
  name: 'yankeyhotel:meteor-chargify',
  version: '0.0.1',
  summary: 'Easy integration with Chargify for adding recurring payments to your application.',
  git: 'https://github.com/yankeyhotel/meteor-chargify',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('http');
  api.addFiles('meteor-chargify.js', 'server');
  api.export('Chargify', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('yankeyhotel:meteor-chargify');
  api.addFiles('meteor-chargify-tests.js');
});
