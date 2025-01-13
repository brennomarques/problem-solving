const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// documentação
// Object: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
// Reduce: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const totalFaturamento = Object.values(faturamento).reduce(
  (acc, valor) => acc + valor,
  0
);

for (const estado in faturamento) {
  const percentual = (faturamento[estado] / totalFaturamento) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

/*
Console.log:

SP: 37.53%
RJ: 20.29%
MG: 16.17%
ES: 15.03%
Outros: 10.98%

*/
