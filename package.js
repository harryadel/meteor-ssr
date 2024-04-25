Package.describe({
  "summary": "Server Side Rendering for Meteor with Blaze",
  "version": "2.2.2",
  "git": "https://github.com/meteorhacks/meteor-ssr",
  "name": "harry97:ssr"
});

Package.onUse(function(api) {
  configurePackage(api);
  api.export(['Template', 'SSR'], ['server']);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use([
    'tinytest',
  ], 'server');

  api.addFiles([
    'test/base.js',
    'test/jade.js'
  ], 'server');
});

function configurePackage(api) {
  api.versionsFrom(['3.0-rc.0']);
  api.use(['blaze@3.0.0-alpha300.17', 'spacebars@2.0.0-alpha300.17', 'spacebars-compiler@2.0.0-alpha300.17', 'mongo', 'random'], 'server');
  api.addFiles([
    'lib/overrides.js',
    'lib/template.js',
    'lib/dynamic.js',
    'lib/api.js',
  ], 'server');
}
