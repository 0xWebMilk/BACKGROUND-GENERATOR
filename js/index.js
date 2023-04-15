const [ color1 , color2 ] = document.querySelectorAll('.color')

const body = document.querySelector('#gradient');
const text = document.querySelector('#color-code');



const change = () => {
    text.innerHTML = color1.value + " | " + color2.value;

    body.style.background = `linear-gradient(${color1.value}, ${color2.value}) no-repeat center center fixed`
}

color1.addEventListener('input', () => {
    change()
})

color2.addEventListener('input', () => {
    change()
})