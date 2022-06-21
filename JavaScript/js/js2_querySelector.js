console.log('****************************')
console.log('*** js2_querySelector.js ***')
console.log('****************************')
/* by ID */
var elemento = document.querySelector('#opcoesPizza')

console.log("elemento = document.querySelector('#opcoesPizza')")

console.log('elemento:')
console.log(elemento)

console.log('elemento.children:')
console.log(elemento.children)

console.log('elemento.children[0].innerHTML:')
console.log(elemento.children[0].innerHTML)

console.log('elemento.childElementCount:')
console.log(elemento.childElementCount)

console.log('elemento.firstElementChild.textContent:')
console.log(elemento.firstElementChild.textContent)

var nr_elementos = elemento.childElementCount

console.log('nr_elementos:')
console.log(nr_elementos)

console.log('loop by Child:')

for (var index = 0; index < elemento.childElementCount; index++) {
  var item = elemento.children[index]
  console.log(item.innerHTML)
}
/* by TAG */
var elemento = document.querySelectorAll('li')

console.log("var elemento =  document.querySelectorAll('li')")

console.log('elemento.length:')
console.log(elemento.length)

console.log('loop by LI elements:')

for (var index = 0; index < elemento.length; index++) {
  var item = elemento[index]
  console.log(item.innerHTML)
}

var elemento = document.querySelectorAll('.em_promocao')

console.log("var elemento = document.querySelectorAll('.em_promocao')")

console.log('loop by Class Name, Pizzas em Promocao:')

for (var index = 0; index < elemento.length; index++) {
  var item = elemento[index]
  console.log(item.innerHTML)
}
