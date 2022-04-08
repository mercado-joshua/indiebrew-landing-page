// web observer api + animate css library

const cb = (entries, observer) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('animate__animated', entry.isIntersecting);
        entry.target.classList.toggle('animate__pulse', entry.isIntersecting);

        if (entry.isIntersecting) observer.unobserve(entry.target);
    });
};

const options = {
    root: null,
    threshold: 0,
    rootMargin: '-150px'
};

const animateSection = () => {
    const targetElements = document.querySelectorAll('[data-js-section]');
    const observer = new IntersectionObserver(cb, options);

    // start observing elements
    targetElements.forEach(element => observer.observe(element));
};

if ('IntersectionObserver' in window) animateSection();