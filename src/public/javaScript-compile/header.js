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