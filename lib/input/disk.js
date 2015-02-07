var glob = require('glob');
var extend = require('extend');
var fs = require('fs');

function Disk(patterns, options) {

  var defaults = {};
  extend(options, defaults);

  return new Promise(function(resolve, reject) {

    var promises = [];

    glob(patterns, options, function(err, files) {

      files.forEach(function(file) {

        var promise = new Promise(function(resolveFile, rejectFile) {

          fs.readFile(file, { encoding: 'UTF-8' }, function(err, fileContents) {
            if(err) {
              rejectFile();
            }

            var page = {};
            page[file] = fileContents;

            resolveFile(page);
          });

        });

        promises.push(promise);
      });


      Promise.all(promises).then(function(pages) {
        resolve(pages);
      });

    });

  });

}

module.exports = function(patterns, options) {
  return new Disk(patterns, options);
};
