const { arrayContain } = require('./3-array-contain');//1+1=2

function generateUnorderedArray(size) {
  let array = [];//1
  for (let i = 0; i < size; i++) {//(1+1+1+1+1)*n=5n
    let number = Math.floor(Math.random() * 100);//1+1+1+1=4
    while (arrayContain(array, number)) {//(1+1)*n=2n
      number = Math.floor(Math.random() * 100);//1+1+1+1=4
    }
    array.push(number);//1+1=2
  }
  return array;//1
}
/**
Complexité dans le pire des cas T(n)=O(1)+O(1)+O(5n(4+2n(4)+2)+O(1) peut être simplifié en n^2
donc T(n)=O(n^2) complexité quadratique
**/
module.exports = { generateUnorderedArray };
