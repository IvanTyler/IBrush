const $selectTypeSystem = document.querySelector('.select-book')
const $selectTypeSystemList = document.querySelector('.select-book-list')
const $selectTypeSystemType = document.querySelector('.select-book__type')

function getBooks() {
    const books = [
        {
            id: 1,
            name: 'JavaScript ниндзя',
        },
        {
            id: 2,
            name: 'Pragmatic Guide to JavaScript',
        },
        {
            id: 3,
            name: 'Pro JavaScript Techniques',
        },
        {
            id: 4,
            name: 'Выразительный JavaScript',
        }
    ]
    return books
}

const typesSystemList = getBooks()

function createTypesSystemListHTML(typesSystemList) {
    return typesSystemList.map(el => {
        return `<li class="select-book-list__option" data-option data-id="${el.id}">${el.name}</li>`
    }).join('');
}

function addTypesSystemHTML() {
    const dataTypesSystemHTML = createTypesSystemListHTML(typesSystemList);
    $selectTypeSystemList.innerHTML = ''
    $selectTypeSystemList.insertAdjacentHTML('afterbegin', dataTypesSystemHTML)
}

addTypesSystemHTML()
$selectTypeSystem.addEventListener('click', (e) => {
    if ($selectTypeSystem.classList.contains('active')) {
        $selectTypeSystem.classList.remove('active')
    } else {
        $selectTypeSystem.classList.add('active')
    }
})

const $selectTypeSystemOptions = document.querySelectorAll('.select-book-list__option')

$selectTypeSystemOptions.forEach((el) => {
    el.addEventListener('click', (e) => {
        $selectTypeSystemOptions.forEach((el) => {
            el.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})

$selectTypeSystem.addEventListener('click', (e) => e.stopPropagation())
document.addEventListener('click', (e) => {
    $selectTypeSystem.classList.remove('active')
})

let $currentOptionText = ''
$selectTypeSystem.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-option')) {
        const $currentOption = event.target.closest('[data-id]')
        $selectTypeSystemType.innerText = $currentOption.textContent
        $currentOptionText = $currentOption.textContent
    }
})