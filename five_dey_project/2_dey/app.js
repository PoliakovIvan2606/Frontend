const item = document.querySelector('.item')
const palceholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of palceholders) {
    placeholder.addEventListener('dragover', dragover) // над плэйсхолдером
    placeholder.addEventListener('dragenter', dragenter) // заходим на територию
    placeholder.addEventListener('dragleave', dragleave) // перетащи но вышли 
    placeholder.addEventListener('drop', dragdrop) // отпустили
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
    
}

function dragend(event) {
    // event.target.classList.remove('hold')
    // event.target.classList.remove('hide')
    // Тоже самое только мы удаояем все классы и добавляем item
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
}
function dragenter(event) {
    event.target.classList.add('hovered')
}
function dragleave(event) {
    event.target.classList.remove('hovered')
}
function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}

