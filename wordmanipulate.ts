function typedWords(text: string, brokenletters: string): number {
  //put text in a set
  const wording = text.split(' ')
  
  let count = 0;
  const broken = brokenletters.split('');
  console.log(`wording: ${wording}`)
  console.log(`broken: ${broken}`)
  for (const word of wording) {
    let canType = true;
    for (const broke of broken) {
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

const countResult = typedWords("hello word", "ad");
console.log(`countResult:${countResult}`)
