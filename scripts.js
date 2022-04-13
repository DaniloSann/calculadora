function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1;
}

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('l-mode')
})