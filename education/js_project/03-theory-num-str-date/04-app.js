const output = document.getElementById('output')
const full = document.getElementById('full')
const date = document.getElementById('date')
const time = document.getElementById('time')


setInterval(() => {
    const date = new Date()
    output.textContent = date.toLocaleTimeString()
}, 1000)