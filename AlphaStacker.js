var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var printedLine = "";
console.log(alpha.length);
for (var i = 0; i < alpha.length; i++) {
printedLine += alpha[i];
      //console.log(printedLine);

 var newString = printedLine.replace(/(.{5})/g," ").trim();
       console.log(printedLine);
 if (printedLine.length % 5 === 0){
    printedLine += ' ';
  console.log(printedLine);
 }


 }

//********************************************************

// var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var letterString = "";
// var newString = "";
// var newStringSpaces ="";
// for (var i = 0; i < alpha.length; i++) {
//     letterString = letterString + alpha[i];
//     console.log(letterString);
//     var newString = letterString.replace(/(.{5})/g, '$1 ').trim();
//     console.log(newString);
// }