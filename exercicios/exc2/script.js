/* 
Soma dos quadrados

const array = [1, 2, 3, 4];

const result = array.reduce((prevVal, atcVal) => prevVal + (atcVal * atcVal), 0);

console.log(result); */


/*
 Concatenar strings 

const array = ["JavaScript", "é", "divertido"];

const frase = array.reduce((prevVal, actVal) => prevVal + ' ' + actVal);

console.log(frase); */

/*
Contagem de elementos 

const array = ["maçã", "banana", "melancia", "maçã", "banana"];

const result = array.reduce((acumulador, actVal) => {

    if (acumulador[actVal]) {
        acumulador[actVal] += 1;
    } else {
        acumulador[actVal] = 1;
    } return acumulador;
}, {});

console.log(result); */

/*
Produto de números 

const array = [2, 3, 4];

const result = array.reduce((acumulador, actVal) => acumulador * actVal);

console.log(result); */

/*
 Filtrar valores únicos 

const array = [1, 2, 2, 3, 4, 4, 5];

const result = array.reduce((acumulador, actVal) => {
    if (!acumulador.includes(actVal)) {
        acumulador.push(actVal);
    } return acumulador;
}, []);

console.log(result); */