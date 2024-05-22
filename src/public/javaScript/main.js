const $courses = document.querySelector('#courses')
const $courses_list = document.querySelector('.javaScript-courses-list')
const $sandwitch = document.querySelector('.header__sandwich')
const $start_studying_button = document.querySelector('.header__button')
const $header_menu = document.querySelector('.header-nav-menu')
const $header = document.querySelector('.header')

$courses.addEventListener('click', (e) => {
    e.stopPropagation()

    activeBlock($courses)
    activeBlock($courses_list)
    $button_open_modal.style.zIndex = '-1'

    if (!$courses.classList.contains('open')) {
        $button_open_modal.style.zIndex = '0'
    }
})

$courses_list.addEventListener('click', (e) => e.stopPropagation())
$header_menu.addEventListener('click', (e) => e.stopPropagation())

function activeBlock(element) {
    element.classList.contains('open') ?
        element.classList.remove('open') :
        element.classList.add('open')
}



$sandwitch.addEventListener('click', (e) => {
    e.stopPropagation()

    activeBlock($header_menu)
    activeBlock($start_studying_button)
})

document.addEventListener('click', (e) => {
    $button_open_modal.style.zIndex = '0'

    containsClass($courses)
    containsClass($courses_list)
    containsClass($header_menu)
    containsClass($start_studying_button)
})

function containsClass(element) {
    if (element.classList.contains('open')) {
        element.classList.remove('open')
    }
}

window.addEventListener('scroll', () => {
    const { y } = document.body.getBoundingClientRect()
    y < 0 ?
        $header.classList.add('scroll') :
        $header.classList.remove('scroll')
})
document.querySelectorAll('.form_input').forEach(el => {
    el.addEventListener('input', (e) => addFocusOverInput(e))
});

function addFocusOverInput(e) {
    const inputValueLength = e.target.value.trim().length
    inputValueLength > 0 ?
        e.target.classList.add('focus') :
        e.target.classList.remove('focus')
}
const $modal = document.querySelector('.modal');
const $form_start_studying = document.querySelector('.form-start-studying');
const $close_modal = document.querySelector('.form-start-studying__close');
const $button_open_modal = document.querySelector('.header__button');

$close_modal.addEventListener('click', () => $modal.style.display = 'none');
$modal.addEventListener('click', () => $modal.style.display = 'none');

$form_start_studying.addEventListener('click', (e) => e.stopPropagation());

$button_open_modal.addEventListener('click', () => $modal.style.display = 'block');


const $post_slider = document.querySelector('.posts-list')
const $post_slider_items = document.querySelectorAll('.posts-list-item')
const $post_slider_item = document.querySelector('.posts-list-item')

const $post_switch_items = document.querySelectorAll('.posts-switch-slider__item')

let countSlideStages = 0
let widthStagesSlider = 0

function nextSlide() {
    let currentElement;

    $post_switch_items.forEach((el, i) => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
            currentElement = el.nextElementSibling
        }
    })

    currentElement.classList.add('active');
}

function prevSlide() {
    let currentElement;

    $post_switch_items.forEach((el, i) => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
            currentElement = el.previousElementSibling
        }
    })
    currentElement.classList.add('active');
}

$post_switch_items?.forEach((el, i) => {
    el.addEventListener('click', () => {
        $post_switch_items.forEach((el) => {
            el.classList.remove('active')
        })
        el.classList.add('active')

        setCurrentWidtSlider(i)
    })
})
function setCurrentWidtSlider(index) {
    widthStagesSlider = 0
    countSlideStages = index

    for (let i = 0; i < countSlideStages; i++) {
        widthStagesSlider = widthStagesSlider + $post_slider_item.offsetWidth + 30
    }

    rollSlider()
}

const currentWidthStagesSlider = () => {
    const widthWindow = window.innerWidth;
    widthWindow <= 500 ?
        $post_slider.style.transform = 'translate(-' + widthStagesSlider + 'px)' :
        $post_slider.style.transform = 'translate(-' + 0 + 'px)'
}

function rollSlider() {
    currentWidthStagesSlider()
}

window.addEventListener('resize', () => {
    rollSlider
    currentWidthStagesSlider()
})

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