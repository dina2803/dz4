let button = document.querySelector('button')
let text = document.querySelector('p')
let traffic = document.querySelector('.traffic_light')
let trafficText = document.querySelector('h1')
button.addEventListener('click', () => {
    let input = prompt('')
    text.innerHTML = input
})
const input = prompt('введите цвет:')
if(input  === 'красный'){
    traffic.style.backgroundColor='red'
    trafficText.innerHTML = 'Stop'
}
else if(input  === 'зеленый'){
    traffic.style.backgroundColor='green'
    trafficText.innerHTML = 'Go'
}
else if(input  === 'желтый'){
    traffic.style.backgroundColor='yellow'
    trafficText.innerHTML = 'Wait'
}

