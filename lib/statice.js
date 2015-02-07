'use strict';

var stream = require('stream');
var extend = require('extend');
require('es6-promise').polyfill();

function Statice() {


  /**
   * Private variables
   */
  var config = {
    pages: {}
  };

  var promises = [];

  /**
   * Input
   */
  function pages(promise) {

    promises.push(new Promise(function(resolve, reject) {

      promise.then(function(pages) {
        pages.forEach(function(page) {
          extend(config.pages, page);
        });

        resolve();
      });

    }));
  }

  function run() {
    return Promise.all(promises);
  }

  /**
   * Configure
   */

  // Layouts

  // Partials

  // Helpers

  /**
   * Render
   */

  /**
   * Output
   */


  return {
    pages: pages,
    run: run,
    _config: extend({}, config) // Expose the config but protect it from modification
  };
}

module.exports = Statice;
