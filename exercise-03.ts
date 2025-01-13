type FaturamentoDia = { valor: number };

const faturamentoMensal: FaturamentoDia[] = [
  { valor: 1000 },
  { valor: 1500 },
  { valor: 0 },
  { valor: 2000 },
  { valor: 0 },
  { valor: 2500 },
  { valor: 1800 },
];

interface EstatisticasFaturamento {
  menorFaturamento: number;
  maiorFaturamento: number;
  diasAcimaMedia: number;
}

function calcularEstatisticas(
  faturamento: FaturamentoDia[]
): EstatisticasFaturamento {
  const diasFaturamento = faturamento.filter((dia) => dia.valor > 0);

  const valores = diasFaturamento.map((dia) => dia.valor);
  const soma = valores.reduce((acc, valor) => acc + valor, 0);
  const media = soma / valores.length;

  const menorFaturamento = valores.reduce(
    (min, valor) => (valor < min ? valor : min),
    valores[0]
  );

  const maiorFaturamento = Math.max(...valores);
  const diasAcimaMedia = valores.filter((valor) => valor > media).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaMedia,
  };
}

const estatisticas = calcularEstatisticas(faturamentoMensal);

console.log(`Menor faturamento: ${estatisticas.menorFaturamento}`);
console.log(`Maior faturamento: ${estatisticas.maiorFaturamento}`);
console.log(
  `Dias com faturamento acima da média: ${estatisticas.diasAcimaMedia}`
);
