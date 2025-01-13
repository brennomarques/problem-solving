type FaturamentoDia = { dia: number; valor: number };

const faturamentoMensal: FaturamentoDia[] = [
  { dia: 1, valor: 1000 },
  { dia: 2, valor: 1500 },
  { dia: 3, valor: 0 },
  { dia: 4, valor: 2000 },
  { dia: 5, valor: 0 },
  { dia: 6, valor: 2500 },
  { dia: 7, valor: 1800 },
];

function calcularEstatisticas(faturamento: FaturamentoDia[]) {
  const diasComFaturamento = faturamento.filter((dia) => dia.valor > 0);
  return diasComFaturamento;
}

const estatisticas = calcularEstatisticas(faturamentoMensal);

console.log(`Faturamento: ${estatisticas}`);
