/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      let returnNumStr=0;
      if(initNum==="invalid number" && returnUnit==="invalid unit"){
        returnNum="invalid number and unit";
        returnNumStr=input;
      }
      else if(returnUnit==="invalid unit"){
        returnNum="invalid unit";
        returnNumStr=input;
      }
      let regEx=/\d/g;
      if(regEx.test(returnNum))
      {
        returnNumStr=returnNum.toFixed(5)

      }

      var string   = initNum +" "+initUnit+" converts to "+returnNumStr+" "+returnUnit;
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit,string);

      //console.log("The json toString to send==="+JSON.stringify(toString));
      res.json(toString);
    });

};
