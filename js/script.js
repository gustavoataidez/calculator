let resultValue = document.getElementById("result-value");
var description = document.getElementById("result-description")
resultValue.innerText = 0
description.innerText = ' '

function clickNumber(number){
  if (description.textContent == '0') {
    description.innerText = ' '
  }
  description.innerText += number
}

function clickOpp(opp){
  if (description.textContent.trim() !== '') {
    description.innerText += opp
  }
}

function result() {
  let formula = description.innerText
  let result = eval(formula)
  resultValue.innerText = result
  description.innerText = result
}

function clearAll() {
 description.textContent = ''
 resultValue.innerText = 0
}
