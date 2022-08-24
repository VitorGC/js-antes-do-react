import { PI, soma, sub } from "./lib/math";

/*
// Nullish Coalescing Operator

const idade = 0;

// 0, '', [], false, undefined, null => não validos no javascript

document.body.innerText = 'Sua ideia é: ' + (idade ?? 'Não informado');
*/

///////////////////////////////////////////////////////////////////////////////

// Objetos
/*
const user = {
    name: 'Vitor',
    nickname: 'VitorGC',
    idade: 25,
    address: {
        street: 'Rua de testes',
        number: 7070,
    },
};

//document.body.innerText = Object.keys(user);
//document.body.innerText = Object.values(user);
//document.body.innerText = JSON.stringify(Object.values(user))
document.body.innerText = JSON.stringify(Object.entries(user))

//Desestruturação -- Remover parte do Objeto em um variável a parte

//const address = user.address

//quando ocorre de termos o address antes e depois do = podemos deixar apenas na esquerda acompanhando por chaves {}

//function mostraIdade(user){
//    return user.idade;
//}

function mostraIdade({ idade }){
    return idade;
}

const { address, idade: age, nickname = 'VGC' } = user

//document.body.innerText = JSON.stringify({address, age, nickname})

document.body.innerText = mostraIdade(user)
*/

///////////////////////////////////////////////////////////////////////////////

// Rest Operator
/*

const user = {
    name: 'Vitor',
    nickname: 'VitorGC',
    idade: 25,
    address: {
        street: 'Rua de testes',
        number: 7070,
    },
};

function mostraIdade({ idade }){
    return idade;
}

//const { name, idade, ...rest } = user;

const array = [1,2,3,4,5,6,7,8,9,10];

const [first, , third, ...rest] = array;

document.body.innerText = JSON.stringify({first, third, rest});

*/

///////////////////////////////////////////////////////////////////////////////

//Short syntax
/*
const name = 'Vitor';
const age = 27;

const user = {
    name,
    age,
}

document.body.innerText = JSON.stringify(user);
*/

///////////////////////////////////////////////////////////////////////////////

//Optional Chaining
/*
const user = {
    name: 'Vitor',
    nickname: 'VitorGC',
    age: 25,
    address: {
        street: 'Rua de testes',
        number: 7070,
        zip:{
            code: '8916000',
            city: 'Teste do Sul'
        },
        showFullAdress() {
            return this.street + ' ' + this.number + ', ' + this.zip.city + ', ' + this.zip.code;
        }
    },
};

//document.body.innerText = user.address ? user.address.street : 'Não informado';

//document.body.innerText = user.address.zip.code

//document.body.innerText = user.address
//    ? user.address.zip
//        ? user.address.zip.code
//        : 'Não informado'
//    : 'Não informado';

//document.body.innerText = user.address?.zip?.code ?? 'Não informado';

//document.body.innerText = user.address?.showFullAdress?.();

const key = 'state';

document.body.innerText = user.address?.[key]
*/

///////////////////////////////////////////////////////////////////////////////

//Métodos de Array

const array = [1, 2, 3, 4, 5, 6, 7];

//for ( const i of array ){
//    document.body.innerText += i;
//}

//array.forEach( item => {
//    document.body.innerText += item;
//})

//const novoArray = [];
//
//array.forEach(item => {
//    novoArray.push(item*2);    
//})
//
//document.body.innerText = JSON.stringify(novoArray);

//const novoArray = array.map(item => { //O Map não faz filtros, exclusões nem nada que modifique o tamanho do array
//    //só é utilizado para transformar o que há dentro ou recriar em outro de mesmo tamanho
//    if(item%2 === 0){
//        return item * 10
//    }
//    return item;
//})

//Métodos mais importantes
//Map, filter, every, some, find, findIndex, reduce

//const novoArray = array
//    .filter(item => item % 2 !=== 0)
//    .map(item => item * 10)

//const todosItensSaoNumeros = array.every(item => typeof item === 'number');
//
//document.body.innerText = JSON.stringify(todosItensSaoNumeros);
//
//const peloMenosUmItemNaoEUmNumero = array.some(item => typeof item !== 'number');
//
//document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero);

//const par = array.find(item => item%2 === 0); //retorna o primeiro valor encontrado
//
//document.body.innerText = JSON.stringify(par);

//const par = array.findIndex(item => item%2 === 0); //retorna a primeira posição do valor encontrado
//
//document.body.innerText = JSON.stringify(par);

// const suma = array.reduce((acc, item) => {
//     //document.body.innerText += acc + ',' + item + ' --- '

//     return acc + item
// }, 0)
// document.body.innerText = JSON.stringify(soma);

////////////////////////////////////////////////////////////////////////////

//Templates Literals

// const name = 'Vitor';
// const message = 'Bem vindo, ' + name;

// document.body.innerText = message

// const name = 'Vitor';
// const message = `Bem vindo ${name ? name: 'visitante'}`;

// document.body.innerText = message;


////////////////////////////////////////////////////////////////////////////

//Promises

// const somaDoisNumeros = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 2000);
//     });
// }

// somaDoisNumeros(1, 3)
//     .then(soma =>{
//         document.body.innerText = soma
//     })
//     .catch(err => {
//         console.log(err)
//     })

// fetch('https://api.github.com/users/vitorgc')
//     .then(response => {//método organizado
//         return response.json();
//     })
//     .then(body => {
//         console.log(body)
//     })
//     // .then(response => {//método desorganizado
//     //     response.json().then(body => {
//     //         console.log(body);
//     //     })
//     // })
//     .catch(err => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log('finish')
//     })

async function buscaDadosNoGitHub(){
    try{
        const response = await fetch('https://api.github.com/users/vitorgc');
        const body = await response.json();

        //console.log(body);
        return body.login;
    } catch(err){
        console.log(err);
    } finally {
        console.log('finish');
    }
}

buscaDadosNoGitHub().then(login => {
    console.log(login);
});


console.log(soma(1, 2))
console.log(sub(3, 2))
console.log(PI)