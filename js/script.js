const add = document.getElementById("add")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
let conteudoResultado = document.getElementById("result-value").innerText;
var descricao = document.getElementById("result-description")


var numberglobal = []
var calcular = []
function clickNumber(number){
  descricao.value += number
  console.log(descricao)
}
function sum(a,b){
  return a + b
}

function resultNumber(){
  alert(eval(descricao))
}

function sum() {
for (let i = 0; i < numberglobal.length; i++) {
  var numero = numberglobal[i];
  calcular.push(numero)
}
}
