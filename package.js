
Package.describe({
  name    : 'semantic:ui-form',
  summary : 'Semantic UI - Form: Single component release',
  version : '1.10.1',
  git     : 'git://github.com/Semantic-Org/UI-Form.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'form.css',
    'form.js'
  ], 'client');
});
