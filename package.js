Package.describe({
  name: 'afruth:bootstrap-touchspin',
  summary: 'Wraps the Bootstrap TouchSpin library into a meteor package.',
  version: '3.0.1',
  git: 'https://github.com/istvan-ujjmeszaros/bootstrap-touchspin'
});

Package.onUse(function(api) {
  api.use('jquery','client');
  api.addFiles([
    'bootstrap-touchspin/src/jquery.bootstrap-touchspin.css',
    'bootstrap-touchspin/src/jquery.bootstrap-touchspin.js'
    ], ['client']);
  });