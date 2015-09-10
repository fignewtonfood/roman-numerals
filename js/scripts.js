// var numerals = [{1: "I"},
//                 5: "V",
//                 10: "X",
//                 50: "L",
//                 100: "C",
//                 500: "D",
//                 1000: "M"]

var numerals = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var roman = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];


var romanNumeral  = function(numberInput) {
    var output = "";
    for (var i=12; numberInput>0&&i>=0; i--) {//decrement
        while (numberInput-numerals[i]>=0) {
            output += roman[i];
            numberInput-=numerals[i];
        }
    }
    return output;
};

// $(document).ready(function() {
//     $("form#romannumeral").submit(function(event){
//         var string = $("input#string").val();
//         var answer = romanNumeral(string);
//         $(".output").text(answer);
//         $("#result").show();
//         event.preventDefault();
//     });
// });
