document.addEventListener('readystatechange', function (event) {
    if (event.target.readyState === 'complete') {
        init();
    }
});

function init() {
    const openBtn = document.querySelector('[data-js-open-btn]');
    const closeBtn = document.querySelector('[data-js-close-btn]');
    const navbar = document.querySelector('[data-js-menubar]');

    openBtn.addEventListener('click', function () {
        navbar.classList.add('-active', 'animate__animated', 'animate__slideInRight');
    });

    closeBtn.addEventListener('click', function () {
        navbar.classList.remove('-active', 'animate__animated', 'animate__slideInRight');
    });
}