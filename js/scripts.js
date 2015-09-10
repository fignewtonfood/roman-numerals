// var numerals = [{1: "I"},
//                 5: "V",
//                 10: "X",
//                 50: "L",
//                 100: "C",
//                 500: "D",
//                 1000: "M"]

var numerals = [1,5,10,50,100,500,1000];
var roman = ["I","V","X","L","C","D","M"];
var output = "";

var romanNumeral  = function(numberInput) {
    for (var i=6; numberInput>0; i--) {
        if (numberInput-numerals[i]>0) {
            numberInput-=numerals[i];
            output += roman[i];
        }
    }

    return ouput;
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
