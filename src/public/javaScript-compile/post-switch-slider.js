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
