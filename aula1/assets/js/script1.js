// 1. No array abaixo, qual o número que pega a Ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes',];
let x = 1;
console.log('1. ' + carros[x]);

// 2. Troque a Ferrari por Audi
carros[1] = 'Audi';
console.log('2. Lista com Audi:');
console.log(carros);

// 3. Adicione Volvo a lista
carros.push('Volvo');
console.log('3. Lista ccom Volvo:');
console.log(carros);

// 4. Exiba quantos itens no array
console.log('4. intens no array:');
console.log(carros.length);