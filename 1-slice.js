function slice(array, start, end) {
  let slicedArray = []; //1
  for (let i = start; i < end; i++) { //(1+1+1+1+1+1)*n
    slicedArray.push(array[i]);//1+1
  }
  return slicedArray;//1
}
/** T(n)=O(1)+O(6n*2)+O(n)
avec lim (T(n) n->+infini ) == lim O(6n*2) == lim O(n) =>T(n)=O(n)
donc cet algorithme a une complexité linéaire
**/
module.exports = { slice };
