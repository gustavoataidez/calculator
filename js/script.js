let conteudoResultado = document.getElementById("result-value");
var descricao = document.getElementById("result-description")

conteudoResultado.innerText = 0

function clickNumber(number){
  descricao.innerText += number
}

function result() {
  let formula = descricao.innerText
  let resultado = eval(formula)
  conteudoResultado.innerText = resultado
}
