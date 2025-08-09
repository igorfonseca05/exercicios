// 1
function getTotal(total) {
    if (typeof total === 'string') {
        const res = Number(total);
        console.log('Agora total é um numero');
    }
    else {
        console.log('Total inserido no sistema');
    }
}
function indentifying(res) {
    if (typeof res === 'string') {
        console.log('Obtive uma string');
    }
    else if (typeof res === 'number') {
        console.log('Obtive uma number');
    }
    else {
        console.log('obtive um boolean');
    }
}
function mensagem(mensagem) {
    if (mensagem) {
        console.log(mensagem);
    }
}
// mensagem('oi')
class Carro {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}
class Moto {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}
const car = new Carro('Fiat', 'prata');
const mot = new Moto('Honda', 'azul');
function identifyInstance(instance) {
    if (instance instanceof Carro) {
        console.log('Voce adicionar infos de um carro');
    }
    else {
        console.log('Voce adicionar infos de uma moto');
    }
}
// identifyInstance(mot)
function getSize(text) {
    if (!text) {
        console.log('Voce deve inserir uma string');
    }
    else {
        console.log(text.length);
    }
}
// getSize(null)
function mapNumber(num) {
    if (typeof num === "number") {
        console.log(num * 2);
    }
    else {
        console.log(num.toLocaleLowerCase());
    }
}
mapNumber('igor');
export {};
//# sourceMappingURL=exercicios1.js.map