Package.describe({
  name: 'peerlibrary:extend-publish',
  summary: 'Helper to easier extend Meteor.publish',
  version: '0.6.0',
  git: 'https://github.com/peerlibrary/meteor-extend-publish.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['1.8.1', '2.3.5']);

  // Core dependencies.
  api.use([
    'coffeescript@1.0.8',
    'ecmascript',
    'ddp',
    'underscore'
  ], 'server');

  api.export('extendPublish', 'server');

  api.mainModule('server.coffee', 'server');
});
