"use strict";
let employee = {
    code: 10,
    name: "John"
};
var Profession;
(function (Profession) {
    Profession[Profession["ATRIZ"] = 0] = "ATRIZ";
    Profession[Profession["PADEIRO"] = 1] = "PADEIRO";
})(Profession || (Profession = {}));
let p1 = {
    name: "Maria",
    age: 29,
    profession: Profession.ATRIZ
};
let p2 = {
    name: "Roberto",
    age: 19,
    profession: Profession.PADEIRO
};
let p3 = {
    name: "Laura",
    age: 32,
    profession: Profession.ATRIZ
};
let p4 = {
    name: "Carlos",
    age: 19,
    profession: Profession.PADEIRO
};
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
let inputValueSum = document.getElementById('value-sum');
let fieldBalance = document.getElementById('field-balance');
let totalBalance;
cleanBalance();
function addBalance(value) {
    if (fieldBalance) {
        totalBalance += value;
        inputValueSum.value = '';
        fieldBalance.innerHTML = totalBalance.toString();
    }
}
function cleanBalance() {
    if (fieldBalance) {
        totalBalance = 0;
        fieldBalance.innerHTML = totalBalance.toString();
    }
}
buttonUpdateBalance === null || buttonUpdateBalance === void 0 ? void 0 : buttonUpdateBalance.addEventListener('click', function () {
    addBalance(Number(inputValueSum.value));
});
buttonClean === null || buttonClean === void 0 ? void 0 : buttonClean.addEventListener('click', function () {
    cleanBalance();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
