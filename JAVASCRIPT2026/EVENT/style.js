var card = document.querySelector(".card")
var container = document.querySelector('.container')
let count=1
card.addEventListener('click', function () {

    const newcard = document.createElement('div')
    newcard.classList.add('card')

    newcard.innerHTML = count
    count++
    container.append(newcard)
})