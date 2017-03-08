// #docregion
var fs = require('fs');
var resources = [
  'systemjs.config.js'
];
resources.map(function(f) {
  var path = f.split('/');
  var t = 'src/' + path[path.length-1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});
