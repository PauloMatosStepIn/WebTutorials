console.log('*******************************')
console.log('*** js4_SetGetAttributes.js ***')
console.log('*******************************')

var imagem = document.querySelector('img')

imagem.setAttribute('src', 'imagens/outra_pizza.jpg')
imagem.setAttribute('width', '300px')
imagem.setAttribute('alt', 'Foto de Outra Pizza')

console.log("imagem.getAttribute('alt'):")
console.log(imagem.getAttribute('alt'))
