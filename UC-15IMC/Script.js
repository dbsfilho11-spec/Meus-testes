let nome = prompt('Qual seu nome?')
let pesoStr = prompt(`olá, ${nome}! Qual é o seu peso em kg?\n(use vírgula ou ponto - ex: 75,5 ou 75.5)`);
let altStr = prompt('Qual sua altura em metros?\n(ex: 1,75 ou 1.75)')

//Isso troca , por .

let peso = Number(pesoStr.replace(',', '.'));
let alt = Number(altStr.replace(',', '.'));

console.log('Nome:', nome)
console.log('Peso:', peso, typeof peso)
console.log('Altura:', alt, typeof alt)

let imc = peso / (alt * alt);
let imcFormato = imc.toFixed(1);

if (imc < 18.5) {
    classificação = 'Abaixo do peso';
} else if (imc < 24.9) {
    classificação = 'Peso normal';
} else if (imc < 29.9) {
    classificação = 'Sobrepeso';
} else if (imc < 34.9) {
    classificação = 'Obesidade Grau I';
} else if (imc < 39.9) {
    classificação = 'Obesidade Grau II';
} else {
    classificação = 'Obesidade Grau III';
}

let resultado = `
__________________
RESULTADO DO IMC
__________________
Nome: ${nome}
Peso: ${peso} kg
Altura: ${alt} m

IMC: ${imcFormatado}
Classificação: ${classificação}

__________________
`;

alert(resultado);
console.log(resltado);

