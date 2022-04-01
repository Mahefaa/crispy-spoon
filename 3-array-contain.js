function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) {//(1+1+1+1+1)*n=5n
    if (array[i] === number) {//1+1+1
      return true;//1
    }
  }
  return false;//1
}
/**
Complexité dans le pire des cas (si l'array ne contient pas number) : T(n)=O(5n*3)+O(1) avec lim(T(n),n->+Infini)=lim(O(5n*3),n->+Infini)=lim(O(n))
donc dans le pire des cas l'algorithme a une complexité linéaire
Complexité dans le meilleur des cas (si number se trouve au début de l'array) : T(n)=O(5*1*(4))=O(1) 
dans le meilleur des cas l'algorithme a une complexité constante
**/

module.exports = { arrayContain };
