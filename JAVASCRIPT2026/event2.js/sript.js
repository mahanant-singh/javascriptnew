const username = document.querySelector('#username')
const paragraph = document.querySelector('h2')
let inputvalue
username.addEventListener('input', (e) => {
    console.log(e.target.value);
    paragraph.innerText=e.target.value
 })