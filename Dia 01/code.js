var valorEmDolar = prompt("Qual o valor em dolar que você quer converter?");
parseFloat(valorEmDolar);
var valorEmReal = valorEmDolar * 5.50;

alert("R$: " + valorEmReal.toFixed(2));