/*
*
*
*       Complete the handler logic below
*
*
*/
function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
function ConvertHandler() {

  this.getNum = function(input) {
    var result=input.split(/[a-zA-Z]/i);
    let regEx=/\d/g; // valid number
    let numbr=result[0];
    if(numbr==""){
      numbr=1;// Incase if nothing is provided the unit  will default to 1
      return numbr;
    }
    if(numbr.indexOf("/")===1 && numbr.indexOf(".")===3){
      numbr="invalid number";
      return numbr;
    }
    if(!regEx.test(numbr)) //test for valid number
    {
        numbr="invalid number";
        return numbr;
    }
    else {
      if(numbr.indexOf("//")!=-1){
        numbr="invalid number";
        return numbr;
      }
    }
    return numbr;
  };

  this.getUnit = function(input) {
    var result=input.split(/[a-zA-Z]/i);
    result=input.replace(result[0],"");
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;
     ['gal','l','mi','km','lbs','kg']
      ['l','gal','km','mi','kg','lbs'];

     switch (initUnit) {
      case 'gal':
         result='l';
         break;
       case 'l':
          result='gal';
           break;
        case 'L':
            result='gal';
            break;
        case 'mi':
            result='km';
            break;
        case 'km':
              result='mi';
              break;
        case 'lbs':
              result='kg';
              break;
        case 'kg':
              result='lbs';
              break;
       default:
            result="invalid unit";
     }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
     case 'gal':
        result='gal';
        break;
      case 'l':
         result='length';
          break;
      case 'mi':
          result='miles';
          break;
       case 'km':
             result='kilometers';
             break;
       case 'lbs':
             result='lbs';
             break;
       case 'kg':
             result='kilogrammes';
             break;
       default:
  }
  return result;
};

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    var str;


      switch (initUnit) {
        case "gal":
        result= initNum * galToL;
        break;
        case "l":
        case "L":
          result= initNum / galToL;
          break;
        case "lbs":
            result= initNum * lbsToKg;
            break;
        case "kg":
            result= initNum / lbsToKg;
            break;
        case "mi":
            result= initNum * miToKm;
            break;
        case "km":
              result= initNum / miToKm;
              break;
        default:
    }
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit,str) {
    var result={initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: str};

    return result;
  };

}

module.exports = ConvertHandler;
