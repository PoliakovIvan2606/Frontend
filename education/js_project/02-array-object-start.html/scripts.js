const create = document.getElementById('create')
const list = document.getElementById('list')
const title = document.getElementById('title')

array = [
    {
        title: 'Добавление элементов в массив',
        status: true
    },
    {
        title: 'Изучить JS',
        status: false
    }
]

function render () {
    list.innerHTML = ''
    if (array.length == 0) {
        list.innerHTML = '<p>Нет заметок</p>'
    } else {
        for (let i=0; i < array.length; i++) {
            list.insertAdjacentHTML('beforeend', getHTML(array[i], i))
        }
    }

}

function getHTML (el, index) {
    return `
    <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >   
          <span class="${el.status ? 'text-decoration-line-through' : ''}">${el.title}</span>
          <span>
            <span class="btn btn-small btn-${el.status ? 'warning' : 'success'}" data-index="${index}" data-type="check">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="times">&times;</span>
          </span>
    </li>`
}

// Функционал
create.onclick = function () {
    array.push({
        title: title.value,
        status: false
    })
    render()
}

list.onclick = function (event) {
    const data = event.target.dataset
    const num = Number(data.index)
    if (data.type == "check") {
        array[num].status = !array[num].status        
    } else if (data.type == "times") {
        array.splice(num, 1)
    }
    render()
}

render()
