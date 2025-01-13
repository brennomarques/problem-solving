function isFibonacci(num: number): boolean {
  if (num < 0) {
    return false;
  }

  let a = 0,
    b = 1;
  if (num === a || num === b) {
    return true;
  }

  let next = a + b;
  while (next <= num) {
    if (next === num) {
      return true;
    }

    a = b;
    b = next;
    next = a + b;
  }

  return false;
}

const numero = 21; // Defina o número aqui para saber se e ou não sequência de Fibonacci.
const pertence = isFibonacci(numero);

if (pertence) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
