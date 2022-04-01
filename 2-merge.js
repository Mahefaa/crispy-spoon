function merge(array1, array2) {
  let mergedArray = []; //1
  let i = 0;//1
  let j = 0;//1
  while (i < array1.length && j < array2.length) {//(1+1+1+1+1+1+1)*n=7*n
    if (array1[i] < array2[j]) { // 1+1+1=3
      mergedArray.push(array1[i]); //1+1=2
      i++;//1
    } else {
      mergedArray.push(array2[j]);//1+1=2
      j++;//1
    }
  }
  while (i < array1.length) {//(1+1+1)*n=3*n
    mergedArray.push(array1[i]);//1+1=2
    i++;//1
  }
  while (j < array2.length) {//(1+1+1)*n=3*n
    mergedArray.push(array2[j]); //1+1=2
    j++;//1
  }
  return mergedArray;//1
}
/**
T(n)=O(1)+O(1)+O(7n*(9))+O(3*n*(3))+O(3*n*3)+O(1)
or lim (T(n),n->+infini)=lim(O(n),n->+Infini)
=> cet algorithme a une complexité linéaire
**/
module.exports = { merge };
