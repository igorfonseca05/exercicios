
// 1

function getTotal(total: string | number) {
    if(typeof total === 'string') {
        const res = Number(total)
        console.log('Agora total é um numero')
    } else {
        console.log('Total inserido no sistema')
    }
}

function indentifying (res: string | number| boolean) {
    if(typeof res === 'string') {
        console.log('Obtive uma string')
    } else if(typeof res === 'number') {
        console.log('Obtive uma number')
    } else {
        console.log('obtive um boolean') 
    }
}

function mensagem (mensagem?: string) {
   if(mensagem) {
        console.log(mensagem)
   }
}

// mensagem('oi')


class Carro {
    brand
    color
    constructor(brand: string, color: string) {
        this.brand = brand
        this.color = color
    }
}

class Moto {
    brand
    color
    constructor(brand: string, color: string) {
        this.brand = brand
        this.color = color
    }
}

const car = new Carro('Fiat', 'prata')
const mot = new Moto('Honda', 'azul')

function identifyInstance(instance: any) {
    if(instance instanceof Carro) {
        console.log('Voce adicionar infos de um carro')
    } else {
        console.log('Voce adicionar infos de uma moto')
    }
}

// identifyInstance(mot)

function getSize(text: string | null) {
    if(!text) {
        console.log('Voce deve inserir uma string')
    }else {
        console.log(text.length)
    }
}

// getSize(null)


function mapNumber(num : number | string) {
    if(typeof num === "number") {
        console.log(num*2)
    } else {
        console.log(num.toLocaleLowerCase())
    }
}

mapNumber('igor')