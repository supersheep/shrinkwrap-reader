var chai = require('chai');
var path = require('path');
var expect = chai.expect;
var shrinkwrap = require('..');
chai.should();


var dependencies = [ { name: 'assertion-error', version: '1.0.0' },
  { name: 'type-detect', version: '0.1.2' },
  { name: 'lang', version: '1.0.0' },
  { name: 'jquery', version: '1.9.2' },
  { name: 'deep-eql', version: '0.1.3' },
  { name: 'neuron', version: '5.0.0' },
  { name: 'class', version: '2.0.5' },
  { name: 'underscore', version: '1.5.3' },
  { name: 'util', version: '1.0.5-prelease' },
  { name: 'json', version: '1.0.1' },
  { name: 'events', version: '1.0.5' },
  { name: 'clone', version: '0.1.13-prelease' } ];

describe('shrinkwrap',function(){
  it('read json', function (done) {

    shrinkwrap.read(path.join(__dirname,'fixtures'),function(err,json){
      expect(json).to.deep.equal(require(path.join(__dirname,'fixtures','cortex-shrinkwrap.json')))
      done();
    },'cortex');
  });

  it('dependencies', function(done){

    shrinkwrap.dependencies(path.join(__dirname,'fixtures'),function(err,arr){

      expect(arr).to.deep.equal(dependencies);
      done();
    },'cortex');


  })
})

