const { slice } = require('./1-slice'); //1+1=2
const { merge }= require('./2-merge');//1+1=2
const { generateUnorderedArray } = require('./4-generate-unordered-array');//1+1=2

function sort(array) {
  if (array.length <= 1) {//1+1=2
    return array;//1
  }
  const middle = Math.floor(array.length / 2);//1+1+1+1
  const left = slice(array, 0, middle);//1+1+
  const right = slice(array, middle, array.length);
  return merge(sort(left), sort(right));
}

const array = generateUnorderedArray(10);//1+1
console.log(array);//1
console.log(sort(array));//1
/**
T(n)=
complexité de slice = O(n)
complexité de generateUnorderedArray = O(n**2)
complexité de merge = O(n)
complexité de sort = (O(log(n))
Dans le pire des cas: 
==> complexité de sort et merge O(n*log(n))

complexité totale T(n)= O(n**2)+O(nlog(n)) donc dominé par n**2

cet algorithme a une complexité quadratique dûe à generateUnorderedArray
la fonction sort a une complexité quasi-linéaire
**/
