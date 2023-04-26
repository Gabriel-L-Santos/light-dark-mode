const header = document.querySelector('.header');
const icon = document.querySelector('.icon');

// Dark Mode //

icon.addEventListener('click', () => {
    header.classList.toggle('dark');
})