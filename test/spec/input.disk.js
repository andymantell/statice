'use strict';

var should = require('should');

var Statice = require('../../lib/statice.js');
var disk = require('../../lib/input/disk.js');
var stream = require('stream');


describe('The disk input plugin', function(){
  var site;

  before(function() {
    site = new Statice();
  });

  it('should add some pages to the site config', function(done) {

    site.pages(disk('./test/fixtures/pages/1.md'))
    site.pages(disk('./test/fixtures/pages/3.md'))
    site.pages(disk('./test/fixtures/pages/2.md'))
    site.pages(disk('./test/fixtures/pages/**/*.md'));

    site.run().then(function() {
      site._config.should.be.an.Object;

      console.log(site._config);

      done();
    });

  });
});
