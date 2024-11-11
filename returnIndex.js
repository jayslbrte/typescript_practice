//Jayson Labarrete - typscript
function returnIndex(arr, num) {
  if (num === void 0) {
    num = 44;
  }
  var indexNum = arr.indexOf(num);
  return indexNum;
}
var finalAns = returnIndex([80, 5, 9, 44, 656, 1, 15, 26, 7]);
console.log(finalAns);
