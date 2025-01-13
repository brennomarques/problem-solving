function inverterString(str: string): string {
  let strInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }

  return strInvertida;
}

const stringOriginal = "Desenvolvedor!"; // Escreva aqui a string que deseja inverter.
const stringInvertida = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
