const $modal = document.querySelector('.modal');
const $form_start_studying = document.querySelector('.form-start-studying');
const $close_modal = document.querySelector('.form-start-studying__close');
const $button_open_modal = document.querySelector('.header__button');

$close_modal.addEventListener('click', () => $modal.style.display = 'none');
$modal.addEventListener('click', () => $modal.style.display = 'none');

$form_start_studying.addEventListener('click', (e) => e.stopPropagation());

$button_open_modal.addEventListener('click', () => $modal.style.display = 'block');