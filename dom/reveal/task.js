function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const rect = reveal.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);  // To reveal elements on page load
