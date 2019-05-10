/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Function convertHandler.getNum(input)', function() {

    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });

    test('Decimal Input', function(done) {
      var input='5.4kg';
      assert.equal(convertHandler.getNum(input),5.4);
      done();
    });

    test('Fractional Input', function(done) {
      var input= '1/2gal';
      var result=convertHandler.getNum(input);
      assert.equal(result,'1/2');
      done();
    });

    test('Fractional Input w/ Decimal', function(done) {
      var input= '3.2/3lbs';
      var result=convertHandler.getNum(input);
      assert.equal(result,'3.2/3');
      done();
    });

    test('Invalid Input (double fraction)', function(done) {
      var input='3//2';
      assert.equal(convertHandler.getNum(input),"invalid number");
      done();
    });

    test('No Numerical Input', function(done) {
      var input='gal';
      assert.equal(convertHandler.getNum(input),1);
      done();
    });

  });

  suite('Function convertHandler.getUnit(input)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        var input="3"+ele;
        assert.equal(convertHandler.getUnit(input),ele);
      });
      done();
    });

    test('Unknown Unit Input', function(done) {
      var input="gad";
      assert.equal(convertHandler.getReturnUnit(input),"invalid unit");
      done();
    });

  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });

  });

  suite('Function convertHandler.spellOutUnit(unit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','kg','lbs'];
      var expect = ['gal','length','miles','kilometers','kilogrammes','lbs'];
      input.forEach(function(ele,i){
        assert.equal(convertHandler.spellOutUnit(ele),expect[i]);
      });
      done();
    });

  });

  suite('Function convertHandler.convert(num, unit)', function() {

    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.92705;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });

    test('L to Gal', function(done) {
      var input=[2,'l'];
      var expected = 0.52834;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });

    test('Mi to Km', function(done) {

      var input=[2,'mi'];
      var expected=3.21868;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.4);
      done();
    });

    test('Km to Mi', function(done) {

      var input=[2,'km'];
      var expected=1.24274;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.00001);
      done();
    });

    test('Lbs to Kg', function(done) {

      var input=[2,'lbs'];
      var expected=0.90718;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.00004);
      done();
    });

    test('Kg to Lbs', function(done) {

      var input=[2,'kg'];
      var expected=4.40924;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.00001);
      done();
    });

  });

});
