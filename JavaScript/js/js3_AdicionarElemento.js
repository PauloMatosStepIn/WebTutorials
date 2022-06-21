console.log('********************************')
console.log('*** js3_AdicionarElemento.js ***')
console.log('********************************')

/* by ID */
var elemento = document.querySelector('#opcoesPizza')
console.log("elemento = document.querySelector('#opcoesPizza')")

var novaPizza = document.createElement('li')

elemento.appendChild(novaPizza)

novaPizza.innerHTML = 'Nova Pizza'

/* OR */

elemento.appendChild(document.createElement('li')).innerHTML = 'Mais uma Pizza'

/* OR */

document.querySelector('#opcoesPizza').appendChild(document.createElement('li')).innerHTML = 'Outra Pizza'
