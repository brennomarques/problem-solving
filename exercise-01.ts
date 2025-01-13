function recursiveSum(n: number): number {
  if (n <= 0) {
    return 0;
  }
  return n + recursiveSum(n - 1);
}

const INDICE = 13;
const SOMA = recursiveSum(INDICE);

console.log(SOMA); // soma = 91
