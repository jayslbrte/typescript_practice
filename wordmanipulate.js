function typedWords(text, brokenletters) {
  //put text in a set
  var wording = text.split(" ");
  var count = 0;
  var broken = brokenletters.split("");
  console.log("wording: ".concat(wording));
  console.log("broken: ".concat(broken));
  for (var _i = 0, wording_1 = wording; _i < wording_1.length; _i++) {
    var word = wording_1[_i];
    var canType = true;
    for (var _a = 0, broken_1 = broken; _a < broken_1.length; _a++) {
      var broke = broken_1[_a];
      //compare brokenletters if in text
      if (word.includes(broke)) {
        canType = false;
        break;
      }
    }
    if (canType) {
      count++;
    }
  }
  //have a parameter to store number of text that can be typed
  return count;
}
// function complicatedIFs(x:string, y:string): void{
//   let i;
//   if ( i<=0, i<x.length(), i++){
//     }
//   const arrX = x.split('').map(Number)
//   const filteredArrX = arrX.filter(j => j > 0)
// }
var countResult = typedWords("hello word", "ad");
console.log("countResult:".concat(countResult));
