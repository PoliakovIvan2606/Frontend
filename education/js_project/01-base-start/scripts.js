const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submit = document.getElementById('submit')
const result = document.getElementById('result')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

let isTrue = true

plus.onclick = function () {
    isTrue = true
}

// напиши сайт средней слодности на pytohn

minus.onclick = function () {
    isTrue = false
}

function colorResult () {
    if (result.textContent > 0) {
        result.style.color = 'green'
    } else if (result.textContent == 0) {
        result.style.color = 'orange'
    } else {
        result.style.color = 'red'
    }
}

submit.onclick = function () {
    if (isTrue) {
        result.textContent = Number(input1.value) + Number(input2.value)       
    } else {
        result.textContent = Number(input1.value) - Number(input2.value)
    }
    colorResult()
}


