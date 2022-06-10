//DESAFIO 1
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";
interface Employee {
  code: number,
  name: string
}
let employee : Employee = {
  code: 10,
  name: "John"
};

//DESAFIO 2
// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

interface Person {
  name: string,
  age: number,
  profession: Profession
}

enum Profession {
  ATRIZ,
  PADEIRO
}

let p1 : Person = {
  name: "Maria",
  age: 29,
  profession: Profession.ATRIZ
};

let p2 = {
  name: "Roberto",
  age: 19,
  profession: Profession.PADEIRO
}

let p3: Person = {
    name: "Laura",
    age: 32,
    profession: Profession.ATRIZ
};

let p4: Person = {
    name: "Carlos",
    age: 19,
    profession: Profession.PADEIRO
}

//DESAFIO 3
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
// let botaoAtualizar = document.getElementById('atualizar-saldo');
// let botaoLimpar = document.getElementById('limpar-saldo');
// let soma = document.getElementById('soma');
// let campoSaldo = document.getElementById('campo-saldo');

// campoSaldo.innerHTML = 0

// function somarAoSaldo(soma) {
//     campoSaldo.innerHTML += soma;
// }

// function limparSaldo() {
//     campoSaldo.innerHTML = '';
// }

// botaoAtualizar.addEventListener('click', function () {
//     somarAoSaldo(soma.value);
// });

// botaoLimpar.addEventListener('click', function () {
//     limparSaldo();
// });

let buttonUpdateBalance = document.getElementById('update-balance');
let buttonClean = document.getElementById('clean-balance');
let inputValueSum = document.getElementById('value-sum') as HTMLInputElement;
let fieldBalance = document.getElementById('field-balance');

let totalBalance: number

cleanBalance()

function addBalance(value: number) {
  if (fieldBalance) {
    totalBalance += value
    inputValueSum.value = ''
    fieldBalance.innerHTML = totalBalance.toString()
  }
}

function cleanBalance() {
    if (fieldBalance) {
      totalBalance = 0
      fieldBalance.innerHTML = totalBalance.toString();
    }
}

buttonUpdateBalance?.addEventListener('click', function () {
  addBalance(Number(inputValueSum.value));
});

buttonClean?.addEventListener('click', function () {
    cleanBalance();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
