/*function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true
    } else {
        return false
    }
}


let idade = 13
var verificacao = maiorDeIdade(idade)

if(verificacao) {
    console.log('É maior de idade')
} else {
    console.log('É menor de idade')
} */



/*function calcPct(n1, n2) {
    return (n2 / n1) * 100;

}

let x = 50
let y = 20
let pct = calcPct(x, y)

console.log(`${pct}% de ${x} é ${y}`) */




/*function calcularImovel(metragem, quartos) {
    var m2 = 3000
    var preco = 0
    switch(quartos) {
        case 1:
        default:
            preco = metragem * m2
            break
        case 2:
            preco = metragem * (m2 * 1.2)
            break
        case 3:
            preco = metragem * (m2 * 1.5)
            break
    }

    return preco

}

let metragem = 123
let quartos = 7
let preco = calcularImovel(metragem, quartos)
console.log(`A casa custa R$ ${preco}`)  
*/





function validar(usuario, senha) {
    if (usuario == 'matheus' && senha == '123') {
        return true
    } else {
        return false
    }
}

let usuario = 'matheus'
let senha = '1235'
let validacao = validar(usuario, senha)
if (validacao) {
    console.log('Acesso concedido.')
} else {
    console.log('Acesso NEGADO!')
}