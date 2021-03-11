function listenerCheckBox() {
    console.log('ss');
} listenerCheckBox() ;

let btnShow = document.querySelector('button');
let result = document.querySelector('h1');

btnShow.addEventListener('click', () => {
    let checkbox = document.querySelector('input[type="checkbox"]:checked');
    result.innerText = checkbox.value;
})