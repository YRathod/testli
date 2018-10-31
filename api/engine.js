
var _ = require("underscore")

var args = process.argv.slice(2);

var SIZE = 20
var SET_SIZE = 17


console.log('Starting of Quiz ');

var qbank = [];

//---Quesion which are unattended by student-----
function getQuestionBank(qNum)
{
    // console.log("Generate Question set for UseId : "+ userId);
    //---Make service call and get unattended question---
    for (i = 1; i <= qNum; i++) {
        qbank.push(i);
    }
    return qbank;
}

//---Create Question  Set -------
//--qNum--unattend question by student
//--nqSet - size of data ----
function createQuestionSet(qNum, nqSet)
{
    for (i = 1; i <= qNum; i++) {

    } 
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
    // Math.floor(Math.random() * 6) + 1  
}


function getQuestionSet()
{
    var qBank = getQuestionBank()
}

var qLen = getQuestionBank(20).length;

var qSet = 4;
// for(var i =0;i < qLen; i++ ){
  
// }

var randomNonRepeatingIntFromInterval = function(min, max, size) {
    var values = [];

    while (values.length < size) {
      values.push(Math.floor(Math.random() * ( max - min + 1) + min));

      values = _.uniq(values);
    }

    return values;
  }


  var randomNonRepeatingInt = function(arr, size) {
    var values = [];

    while (values.length < size) {
        values = _.sample(arr, size)
        values = _.uniq(values);
    }

    console.log(values.length);

    return values;
  }

  console.log(randomNonRepeatingInt(getQuestionBank(SIZE),SET_SIZE));



// for( var i = 0; i < getQuestionBank(20).length;i++)
// {
//     console.log(randomIntFromInterval(0,getQuestionBank(1, 20).length))
// }