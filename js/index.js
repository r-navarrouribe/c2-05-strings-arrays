function esPalindromo(frase) {
  const nuevaFrase = frase
    .toLowerCase()
    .replaceAll(/[.,:;()_?¿!¡-\s]/g, "")
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "");
  const fraseInvertida = nuevaFrase.split("").reverse().join("");
  return nuevaFrase === fraseInvertida;
}

console.log(esPalindromo("ama"));

const preguntaPalindromo = (frase) =>
  `${frase} ${
    esPalindromo(frase) ? "es un palíndromo" : "no es un palíndromo"
  }`;

const frase1 = "Esto es un intento fallido de palíndromo";

const frase2 = "Dábale arroz a la zorra el abad";

console.log(preguntaPalindromo(frase1));

console.log(preguntaPalindromo(frase2));
